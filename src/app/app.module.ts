import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { LearnFormModule } from './learn-form/learn-form.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';
import { HeroFormComponent } from './learn-form/hero-form/hero-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerDashboardModule, // add the feature module here
    LearnFormModule,

    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
