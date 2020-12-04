import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Welcome to Company Home</h2>
    <a [routerLink]="[ 'person-list']" routerLinkActive="active">View Person List</a>
    <router-outlet></router-outlet>
  `
})
export class PersonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
