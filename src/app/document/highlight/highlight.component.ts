import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-highlight",
  templateUrl: "./highlight.component.html",
  styles: []
})
export class HighlightComponent implements OnInit {
  constructor() {}

  color = "yellow";

  ngOnInit(): void {}
}
