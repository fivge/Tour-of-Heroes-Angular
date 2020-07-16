import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>{{ count }}</div>
    <button (click)="add()">add</button>
    <button (click)="minus()">minus</button>
  `
})
export class CounterComponent {
  count = -22;

  add() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
}
