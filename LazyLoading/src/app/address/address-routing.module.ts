import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';

const addressRoutes: Routes = [
  {
    path: '',
    component: AddressComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(addressRoutes)
  ],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
