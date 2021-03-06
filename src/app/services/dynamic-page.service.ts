import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IDynamicPageData, IDynamicPageMeta, DYNAMIC_PAGES } from 'src/data/dynamic-page';
import { map } from 'rxjs/operators';
import { TextContentComponent } from '../components/text-content/text-content.component';
import { BannerComponent } from '../components/banner/banner.component';
import { DynamicPageItem } from '../pages/dynamic-page/dynamic-page-item';

export interface IDynamicPage {
  items: DynamicPageItem[];
  meta: IDynamicPageMeta;
}

export interface IDynamicPageListing {
  uri: string;
  title: string;
}

// Used to map the "component indentifier" to an actual component
const COMPONENT_NAME_MAP = {
  'text-content': TextContentComponent,
  'banner': BannerComponent,
};

@Injectable({
  providedIn: 'root'
})
export class DynamicPageService {

  constructor() { }

  getSitesForListing(): Observable<IDynamicPageListing[]> {
    return of(DYNAMIC_PAGES
      .filter(x => !x.uri.split('/')[2]) // filter only first level dynamic routes, not nested routes e.g "/campaing/nested"
      .map(x => ({
        title: x.meta.title,
        uri: x.uri,
      }))
    );
  }

  get(uri): Observable<IDynamicPage> {
    return this.simulateHttpGet(uri)
      .pipe(
        map(page => ({
          items: page.items.map(
            // map the parts to a DynamicPageITem
            item => new DynamicPageItem(COMPONENT_NAME_MAP[item.component], item.props)
          ),
          meta: page.meta,
        }))
      );
  }

  // for demo purposes, just mock the http call.
  // this data could be loaded from your backend which fetches the dynamic page configuration
  // from API CMS like Prismic or Contentful and cleans the response.
  // You could also clean the response in front-end and directely fetch the config from API CMS.
  private simulateHttpGet(uri): Observable<IDynamicPageData> {
    const page = DYNAMIC_PAGES.find(x => x.uri === uri);
    if (!page) {
      return throwError(new Error('Not found - 404'));
    }
    return of(page);
  }
}
