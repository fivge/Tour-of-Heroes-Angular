import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>{{ count }}</div>
    <button (click)="add()">add</button>
    <button (click)="minus()">minus</button>
  `
})
export class CounterComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  count = -22;

  add() {
    this.count += 1;
    // this.cdr.detectChanges();
  }
  minus() {
    this.count -= 1;
    this.cdr.detectChanges();
  }
}
