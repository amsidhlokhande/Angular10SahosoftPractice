import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CompanyModule } from './company/company.module';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonModule } from './person/person.module';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () => CompanyModule
  },
  {
    path: 'person',
    loadChildren: () => PersonModule
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },  
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  },

  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
