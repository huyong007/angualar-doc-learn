import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';
import { HeroFormComponent } from './learn-form/hero-form/hero-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'customer',
    component: CustomerDashboardComponent,
    data: { title: 'customer' }
  },
  {
    path: 'heroform',
    component: HeroFormComponent,
    data: { title: 'heroform' }
  },
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
