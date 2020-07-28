import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

//import {HeroesComponent} from './app/heroes/heroes.component';

if (environment.production) {
  enableProdMode();
}

/*
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    //MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  declarations: [],
  bootstrap: [],
  providers: []
})
*/
//export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
