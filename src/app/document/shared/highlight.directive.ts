import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
    el.nativeElement.href = "http://www.baidu.com";
    el.nativeElement.target = "_blank";
  }

  @Input("appHighlight") highlightColor: string;
  @Input() defaultColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
