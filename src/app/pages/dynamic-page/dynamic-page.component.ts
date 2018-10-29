import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { DynamicPageService, IDynamicPage } from 'src/app/services/dynamic-page.service';
import { DynamicPageItem } from './dynamic-page-item';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent implements OnInit {
  content: DynamicPageItem[];

  constructor(
    private location: Location,
    private dynamicPageService: DynamicPageService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    const uri = this.location.path();
    // load the dynamic page configuration from service
    this.dynamicPageService.get(uri)
      .subscribe(
        (page: IDynamicPage): void => {
          this.title.setTitle(page.meta.title);
          this.content = page.items;
        },
        (error: Error): void => {
          console.log(`${uri} -> caught: ${error.message}, redirecting to frontpage`);
          this.router.navigateByUrl('/');
        }
      );
  }

}
