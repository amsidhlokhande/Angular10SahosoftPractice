import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { DeactiveGuard } from './deactive.guard';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MyActivateChildGuardGuard } from './my-activate-child-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ActivateGuard]
  },
  {
    path: 'merchant',
    component: MerchantComponent,
    canDeactivate: [DeactiveGuard]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivateChild: [MyActivateChildGuardGuard],
    children: [
      {
        path: 'addcustomer',
        component: AddcustomerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
