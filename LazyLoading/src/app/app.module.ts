import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { PersonListComponent } from './person/person-list/person-list.component'; */
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    /* CompanyComponent,
    PersonComponent,
    CompanyListComponent,
    PersonListComponent, */
    ContactusComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule Loaded');
  }
}
