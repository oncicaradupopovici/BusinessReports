import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { DictionariesModule } from './dictionaries/dictionaries.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,   
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    DictionariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
