import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Welcome to Company Home</h2>
    <a [routerLink]="[ 'company-list']" routerLinkActive="active">View Company List</a>
    <router-outlet></router-outlet>
  `
})
export class CompanyComponent implements OnInit {

  constructor() { 
    console.log('CompanyComponent loaded');
  }

  ngOnInit(): void {
  }

}
