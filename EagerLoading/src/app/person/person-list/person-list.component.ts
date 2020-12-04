import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  template: `
      <ul *ngFor="let person of persons; let i=index">
        <li>{{person.personName}}</li>
        <li>{{person.personAge}}</li>
      </ul>
    `
})
export class PersonListComponent implements OnInit {
  persons: any;
  constructor() { }

  ngOnInit(): void {
    this.persons = [
      {
        'personName': 'Amsidh Lokhande',
        'personAge': 37
      },
      {
        'personName': 'Dada Lokhande',
        'personAge': 40
      },
      {
        'personName': 'Raju Lokhande',
        'personAge': 35
      }
    ];
  }

}
