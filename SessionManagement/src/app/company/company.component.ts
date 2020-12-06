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

    console.log("Company Web Storage Details");
    console.log(localStorage.getItem('myLocalstorage'));
    console.log(sessionStorage.getItem('mySessionStorage'));
  }

}
