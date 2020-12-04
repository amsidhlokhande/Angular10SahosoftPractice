import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1><u>Address</u></h1>
    <p>
      Flat No 706, C2D, Long Island, Pride World City
      <br>Charholi Budruk
      <br>Pune-412105
    </p>
  `
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
