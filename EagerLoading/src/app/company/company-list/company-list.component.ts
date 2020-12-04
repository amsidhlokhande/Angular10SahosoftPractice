import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: any;

  constructor() { }

  ngOnInit(): void {
    this.companies = [
      {
        'Code': '001',
        'Name': 'HCL'
      },
      {
        'Code': '002',
        'Name': 'Accenture'
      },
      {
        'Code': '003',
        'Name': 'Sungard'
      },
      {
        'Code': '004',
        'Name': 'FIS'
      },
      {
        'Code': '005',
        'Name': 'Capgemini'
      },
      {
        'Code': '006',
        'Name': 'Deutsche Bank'
      },
    ];
  }

}
