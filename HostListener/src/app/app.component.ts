import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The HostListener Example';

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click')
  clickEvent() {
    alert('Click event fired!');
  }

  @HostListener('mouseover')
  mouseOver() {
    //alert('Mouse over event fired!');
    this.changeColor('red');
  }

  @HostListener('mouseleave')
  mouseLeave() {
    //alert('Mouse leave event fired!');
    this.changeColor('blue');
  }

  changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
