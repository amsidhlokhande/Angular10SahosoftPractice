import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Employee Web Storage Details:')
    console.log(localStorage.getItem('myLocalstorage'));
    console.log(sessionStorage.getItem('mySessionStorage'));
    console.log(localStorage.getItem('userInfo'));
  }

}
