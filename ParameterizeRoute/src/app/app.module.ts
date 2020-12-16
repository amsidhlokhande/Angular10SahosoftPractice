import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BookdetailResolverService } from './bookdetail-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookdetailResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
