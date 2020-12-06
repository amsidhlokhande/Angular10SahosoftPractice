import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: '**',
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
