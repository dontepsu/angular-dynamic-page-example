import { Type } from '@angular/core';

export class DynamicPageItem {
  constructor(public component: Type<any>, public props: any) { }
}
