import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
      .filter(x => !x.uri.split('/')[2]) // we want only first level dynamic routes, not nested routes e.g "/campaing/nested"
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
            item => new DynamicPageItem(COMPONENT_NAME_MAP[item.component], item.props)
          ),
          meta: page.meta,
        }))
      );
  }

  private simulateHttpGet(uri): Observable<IDynamicPageData> {
    return of(DYNAMIC_PAGES.find(x => x.uri === uri));
  }
}
