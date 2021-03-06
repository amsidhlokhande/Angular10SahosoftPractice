import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { ActivateGuard } from './activate.guard';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactiveGuard } from './deactive.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MerchantComponent,
    CustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, ActivateGuard, DeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
