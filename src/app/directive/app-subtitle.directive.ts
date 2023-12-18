import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppSubtitle]'
})
export class AppSubtitleDirective {
  constructor(private _element: ElementRef, private _renderer: Renderer2) { }
  
  @HostListener('mouseenter') 
  onHover() {
    this._renderer.setStyle(this._element.nativeElement, 'transition', '0.5s');
    this._renderer.setStyle(this._element.nativeElement, 'background-color', 'red')
  }
  @HostListener('mouseleave') 
  onLeave() {
    this._renderer.setStyle(this._element.nativeElement, 'transition', '0.5s');
    this._renderer.setStyle(this._element.nativeElement, 'background-color', '#4CAF50')
  }
}
