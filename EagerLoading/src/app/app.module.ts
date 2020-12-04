import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { ContactusComponent } from './contactus.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PersonModule } from './person/person.module';


@NgModule({
  imports: [
    BrowserModule,
    CompanyModule,
    PersonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContactusComponent,
    PagenotfoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
