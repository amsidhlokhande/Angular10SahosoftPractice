import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookdetailResolverService } from './bookdetail-resolver.service';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookdetail/:id',
    component: ViewDetailsComponent,
    resolve: {
      bookdetail: BookdetailResolverService
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
