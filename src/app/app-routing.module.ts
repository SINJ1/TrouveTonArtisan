import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Page404Component } from './page404/page404.component';
import { CategoryComponent } from './category/category.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';
import { SpecialtyComponent } from './specialty/specialty.component';


const routes: Routes = [
  

  {path: "", component: HomeComponent}, 
  {path: "category/:category", component: CategoryComponent},
  {path: "location/:location", component: LocationComponent},
  {path: "name/:name", component: NameComponent},
  {path: "specialty/:specialty", component: SpecialtyComponent},
  {path: "artisan/:id", component: FicheArtisanComponent}, 
  {path: "**", pathMatch:'full', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
