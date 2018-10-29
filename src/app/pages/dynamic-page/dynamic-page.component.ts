import { Component, OnInit } from '@angular/core';
import { DynamicPageService, IDynamicPage } from 'src/app/services/dynamic-page.service';
import { DynamicPageItem } from './dynamic-page-item';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

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
    private title: Title
  ) { }

  ngOnInit() {
    const uri = this.location.path();
    this.dynamicPageService.get(uri)
      .subscribe((page: IDynamicPage) => {
        this.title.setTitle(page.meta.title);
        this.content = page.items;
      });
  }

}
