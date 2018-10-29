import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { DynamicPageItem } from './dynamic-page-item';
import { DynamicPageItemHostDirective } from './dynamic-page-item-host.directive';

@Component({
  selector: 'app-dynamic-page-item-loader',
  template: `<ng-template appDynamicPageItemHost></ng-template>`
})
export class DynamicComponentLoaderComponent implements OnInit {
  @Input() dynamicPageItem: DynamicPageItem;
  @ViewChild(DynamicPageItemHostDirective) dynamicPageItemHost: DynamicPageItemHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicPageItem.component);
    const viewContainerRef = this.dynamicPageItemHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.dynamicPageItem.props).forEach(
      key => {
        (<any>componentRef.instance)[key] = this.dynamicPageItem.props[key];
      }
    );
  }

}
