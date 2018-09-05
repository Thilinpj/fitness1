import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactComponent } from './components/contact/contact.component';
import { FitnessInstitutesComponent } from './components/fitness-institutes/fitness-institutes.component';
import { GymsComponent } from './fitness-institutes/gyms/gyms.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';


import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatDividerModule, MatListModule,MatCardModule,MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ArticlesComponent,
    ContactComponent,
    FitnessInstitutesComponent,
    GymsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot([
      {
        path:'components/home',
        component:HomeComponent
      },
      {
        path:'components/fitness-institutes',
        component:FitnessInstitutesComponent
      },
      {
        path:'components/fitness-institutes/gyms',
        component:GymsComponent
      },
      {
        path:'components/articles',
        component:ArticlesComponent
      },
      
      {
        path:'components/contact',
        component:ContactComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
