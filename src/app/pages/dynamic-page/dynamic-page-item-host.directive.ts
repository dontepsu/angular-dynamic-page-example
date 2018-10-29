import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicPageItemHost]',
})
export class DynamicPageItemHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

