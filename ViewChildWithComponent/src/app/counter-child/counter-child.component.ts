import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent implements OnInit {

  counter: number = 0;
  message!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  counterIncreaseByOne() {
    this.counter = this.counter + 1;
    this.message = "Counter :" + this.counter;
  }


  counterDecreaseByOne() {
    this.counter = this.counter - 1;
    this.message = "Counter :" + this.counter;
  }
}
