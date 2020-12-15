import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { AdminComponent } from './admin/admin.component';
import { DeactiveGuard } from './deactive.guard';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
