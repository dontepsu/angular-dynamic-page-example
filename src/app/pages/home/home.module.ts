import { HomeRoutingModule } from './home-routing.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { DynamicPageService } from 'src/app/services/dynamic-page.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [
        DynamicPageService
      ]
    };
  }
}
