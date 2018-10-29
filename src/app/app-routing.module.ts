import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    // Use lazy loaded routes, otherwise the navigating between dynamic pages won't work
    path: '**',
    loadChildren: './pages/dynamic-page/dynamic-page.module#DynamicPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    enableTracing: true,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
