import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { LearnFormModule } from './learn-form/learn-form.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';
import { HeroFormComponent } from './learn-form/hero-form/hero-form.component';
import { ProfileEditorComponent } from './learn-form/profile-editor/profile-editor.component';


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
  {
    path: 'profileeditor',
    component: ProfileEditorComponent,
    data: { title: 'profileeditor' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: CustomerDashboardComponent }
];



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerDashboardModule, // add the feature module here
    LearnFormModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
