import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { TextContentComponent } from './components/text-content/text-content.component';
import { DynamicPageItemHostDirective } from './pages/dynamic-page/dynamic-page-item-host.directive';
import { HomeComponent } from './pages/home/home.component';
import { DynamicComponentLoaderComponent } from './pages/dynamic-page/dynamic-page-item-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicPageComponent,
    BannerComponent,
    TextContentComponent,
    DynamicPageItemHostDirective,
    HomeComponent,
    DynamicComponentLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    BannerComponent,
    TextContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
