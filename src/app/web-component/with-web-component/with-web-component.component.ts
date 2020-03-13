import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-with-web-component',
  templateUrl: './with-web-component.component.html',
  styles: []
})
export class WithWebComponentComponent implements OnInit {
  constructor() {}

  @ViewChildren('tab') tabs: QueryList<ElementRef>;
  @ViewChildren('statefulTab') statefulTabs: QueryList<ElementRef>;

  tabObjects = [
    {
      title: 'Tab 01',
      closable: true,
      pane: {
        title: 'Tab 01 Content'
      }
    },
    {
      title: 'Tab 02',
      closable: false,
      pane: {
        title: 'Tab 02 Content'
      }
    }
  ];

  ngOnInit(): void {}

  onTabClosed({ detail: component }) {
    console.log(component);
  }

  onStatefulTabClosed(event) {
    event.preventDefault();
    const component = event.detail;
    this.tabObjects.splice(component.dataset.index, 1);
  }
}
