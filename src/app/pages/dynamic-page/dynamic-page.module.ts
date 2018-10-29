import { NgModule, ModuleWithProviders } from '@angular/core';
import { DynamicPageComponent } from './dynamic-page.component';
import { DynamicComponentLoaderComponent } from './dynamic-page-item-loader.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { TextContentComponent } from 'src/app/components/text-content/text-content.component';
import { DynamicPageItemHostDirective } from './dynamic-page-item-host.directive';
import { DynamicPageRoutingModule } from './dynamic-page-routing.module';
import { DynamicPageService } from 'src/app/services/dynamic-page.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DynamicPageRoutingModule,
  ],
  declarations: [
    DynamicComponentLoaderComponent,
    DynamicPageComponent,
    BannerComponent,
    TextContentComponent,
    DynamicPageItemHostDirective,
  ],
  entryComponents: [
    BannerComponent,
    TextContentComponent
  ],
})
export class DynamicPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DynamicPageModule,
      providers: [
        DynamicPageService
      ]
    };
  }
}
