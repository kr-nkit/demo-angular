import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [

    AppComponent,
    RecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
