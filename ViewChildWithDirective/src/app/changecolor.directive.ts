import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = 'red';
  }

  changeColor(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }

}
