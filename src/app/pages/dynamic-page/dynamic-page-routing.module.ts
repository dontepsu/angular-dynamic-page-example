import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicPageComponent } from './dynamic-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
    ])
  ],
  exports: [RouterModule]
})
export class DynamicPageRoutingModule { }
