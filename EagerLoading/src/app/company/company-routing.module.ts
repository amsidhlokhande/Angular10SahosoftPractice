import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';


const companyRoutes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      {
        path: 'company-list',
        component: CompanyListComponent
      }
    ]
  }
]


@NgModule({
  imports: [ RouterModule.forRoot(companyRoutes) ],
  exports: [RouterModule]
  
})
export class CompanyRoutingModule { }
