import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
  // selector: '[appAd]'
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
