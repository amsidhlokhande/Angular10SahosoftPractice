import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { PagenotfoundComponent } from './pagenotfound.component';

const routes: Routes = [
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '',
    redirectTo: '/company',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
