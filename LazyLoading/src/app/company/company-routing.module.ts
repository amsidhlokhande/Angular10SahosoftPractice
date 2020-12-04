import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: 'company-list',
        component: CompanyListComponent
      }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(companyRoutes)],
  exports: [RouterModule]

})
export class CompanyRoutingModule {
  constructor() {
    console.log('CompanyRoutingModule loaded');
  }
}
