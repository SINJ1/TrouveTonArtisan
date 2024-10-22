import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Page404Component } from './page404/page404.component';
import { SortbynotePipe } from './sortbynote.pipe';
import { CategoryComponent } from './category/category.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';
import { NotePipe } from './note.pipe';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    FicheArtisanComponent,
    Page404Component,
    SortbynotePipe,
    NameComponent,
    LocationComponent,
    NotePipe,
    SpecialtyComponent,
    HomeComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
