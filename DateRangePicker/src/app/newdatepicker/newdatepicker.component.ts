import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newdatepicker',
  templateUrl: './newdatepicker.component.html',
  styleUrls: ['./newdatepicker.component.css']
})
export class NewdatepickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
