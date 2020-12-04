import { Component, OnInit } from '@angular/core';

@Component({
  template: `
   <table border="1">
     <tr>
       <th>Person Name</th>
       <th>Person Age</th>
     </tr>  
     <tr *ngFor="let person of persons">
        <td>{{person.name}}</td>
        <td>{{person.age}}</td>
     </tr>
  </table>
  `
})
export class PersonListComponent implements OnInit {

  persons: any;
  constructor() { }

  ngOnInit(): void {
    this.persons = [
      {
        name: 'Amsidh Lokhande',
        age: 37
      },
      {
        name: 'Anjali Lokhande',
        age: 33
      },
      {
        name: 'Aditya Lokhande',
        age: 7
      },
      {
        name: 'Adithi Lokhande',
        age: 10
      }
    ]
  }

}
