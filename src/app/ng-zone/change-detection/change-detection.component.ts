import { Component, NgZone, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styles: []
})
export class ChangeDetectionComponent {
  noop() {}
  constructor(ngZone: NgZone) {
    ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('should check now');
    });
    setTimeout(() => {}, 3000);
    fetch('').then(() => {});
  }

  // a: ApplicationRef
}
