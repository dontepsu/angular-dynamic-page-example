import { Component, OnInit } from '@angular/core';
import { DynamicPageService, IDynamicPageListing } from 'src/app/services/dynamic-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listing: IDynamicPageListing[];

  constructor(
    private dynamicPageService: DynamicPageService
  ) { }

  ngOnInit() {
    this.dynamicPageService.getSitesForListing()
      .subscribe(listing => {
        this.listing = listing;
      });
  }

}
