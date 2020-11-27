import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewdatepickerComponent } from './newdatepicker/newdatepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NewdatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
