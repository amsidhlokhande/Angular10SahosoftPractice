import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <table>
     <tr>
       <th>Company Code</th>
       <th>Company Name</th>
     </tr>  
     <tr *ngFor="let company of companies">
        <td>{{company.code}}</td>
        <td>{{company.name}}</td>
     </tr>
  </table>
  `
})
export class CompanyListComponent implements OnInit {

  companies: any;
  constructor() { }

  ngOnInit(): void {
    this.companies = [
      {
        code: 1,
        name: 'FSS'
      },
      {
        code: 2,
        name: 'Accenture'
      },
      {
        code: 3,
        name: 'Sungard'
      },
      {
        code: 4,
        name: 'Capgemini'
      },
      {
        code: 5,
        name: 'Deutsche Bank'
      }
    ];
  }

}
