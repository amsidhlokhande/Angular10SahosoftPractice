import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    
  ]
})
export class CompanyModule { 
  constructor(){
    console.log('CompanyModule loaded');
  }
}
