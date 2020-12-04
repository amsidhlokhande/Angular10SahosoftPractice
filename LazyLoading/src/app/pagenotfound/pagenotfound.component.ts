import { Component, OnInit } from '@angular/core';

@Component({
  template: `
     <h1>This page is not found 404!</h1>
    `
})
export class PagenotfoundComponent implements OnInit {

  constructor() {
    console.log('PagenotfoundComponent Component Loaded');
   }

  ngOnInit(): void {
  }

}
