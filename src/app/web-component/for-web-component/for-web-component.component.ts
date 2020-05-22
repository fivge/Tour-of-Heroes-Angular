import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from '../shared/popup.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-for-web-component',
  templateUrl: './for-web-component.component.html',
  styles: []
})
export class ForWebComponentComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
    // https://stackoverflow.com/questions/60633792/argument-of-type-ngelementconstructorunknown-is-not-assignable-to-parameter
  }
}
