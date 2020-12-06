import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'bookdetails',
    component: BookdetailsComponent,
    outlet: 'bookList'
  },
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
