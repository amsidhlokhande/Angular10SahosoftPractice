import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  declarations: [PersonComponent, PersonListComponent],
  providers:[]
})
export class PersonModule {
  constructor() {
    console.log('PersonModule loaded');
  }
}
