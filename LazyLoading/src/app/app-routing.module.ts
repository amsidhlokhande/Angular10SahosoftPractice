import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddressModule } from './address/address.module';
import { CompanyModule } from './company/company.module';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { CustompreloadingstrategywithdelayService } from './custompreloadingstrategywithdelay.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonModule } from './person/person.module';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () => CompanyModule,
    data: { preload: true, delay:5000}
  },
  {
    path: 'person',
    loadChildren: () => PersonModule,
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'address',
    loadChildren: () => AddressModule
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //preloadingStrategy: CustomPreloadingStrategyService
    preloadingStrategy: CustompreloadingstrategywithdelayService
  })],
  exports: [RouterModule],
  providers: [/* CustomPreloadingStrategyService */ CustompreloadingstrategywithdelayService]
})
export class AppRoutingModule { }
