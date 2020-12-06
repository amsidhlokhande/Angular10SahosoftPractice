import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ColorParentComponent } from './color-parent/color-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangecolorDirective,
    ColorParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
