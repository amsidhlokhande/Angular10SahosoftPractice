import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {

  @ViewChild(CounterChildComponent) counterChildComponent !: CounterChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.counterChildComponent.counterIncreaseByOne();
  }

  decrease() {
    this.counterChildComponent.counterDecreaseByOne();
  }
}
