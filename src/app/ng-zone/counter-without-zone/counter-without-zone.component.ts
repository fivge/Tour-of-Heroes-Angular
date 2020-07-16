import { Component, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-counter-without-zone',
  templateUrl: './counter-without-zone.component.html',
  styles: []
})
export class CounterWithoutZoneComponent {
  constructor(private applicationRef: ApplicationRef) {}
  tick() {
    this.applicationRef.tick();
  }
}
