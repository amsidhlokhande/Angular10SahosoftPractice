import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-color-parent',
  templateUrl: './color-parent.component.html',
  styleUrls: ['./color-parent.component.css']
})
export class ColorParentComponent implements OnInit {

  @ViewChild(ChangecolorDirective) changecolorDirective!: ChangecolorDirective;
  constructor() { }

  ngOnInit(): void {
  }

  colorChange(color: string) {
    this.changecolorDirective.changeColor(color);
  }
}
