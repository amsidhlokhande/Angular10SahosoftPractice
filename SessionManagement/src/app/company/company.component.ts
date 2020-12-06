import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    localStorage.setItem('myLocalstorage', 'Amsidh Local Web Stored');
    sessionStorage.setItem('mySessionStorage', 'Anjali Session Web Stored');
    sessionStorage.setItem('adityaSessionStorage', 'Aditya Session Web Stored');
    let userInfo = { name: 'Amsidh', age: 37 };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    sessionStorage.removeItem('adityaSessionStorage');

    console.log("Company Web Storage Details");
    console.log(localStorage.getItem('myLocalstorage'));
    console.log(sessionStorage.getItem('mySessionStorage'));
    console.log(sessionStorage.getItem('adityaSessionStorage'));

    console.log(localStorage.getItem('userInfo'));

    //check whether localstorage / sessionstorage has some data or not
    if (localStorage.length > 0) {
      console.log("Data present in localstorage");
    } else {
      console.log("Data not present in localstorage");
    }
    sessionStorage.clear();

    if (sessionStorage.length > 0) {
      console.log("Data present in sessionStorage");
    } else {
      console.log("Data not present in sessionStorage");
    }

    //check wheter current browser support to the localstorage or not
    if (window.localStorage) {
      console.log('Browser support to localstorage');
    } else {
      console.log('Browser does not support to localstorage');
    }

    if (window.sessionStorage) {
      console.log('Browser support to sessionStorage');
    } else {
      console.log('Browser does not support to sessionStorage');
    }


  }

}
