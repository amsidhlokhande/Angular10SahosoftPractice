import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';


@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
  constructor() {
    console.log('PersonModule loaded');
  }
}
