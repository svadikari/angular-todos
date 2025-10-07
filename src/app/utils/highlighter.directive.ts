import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input('appHighlighter') colorCode?:string;
  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  mouseover() {
    this.highlight(this.colorCode || 'yellow')
  }
  @HostListener('mouseleave')
  mouseout() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
