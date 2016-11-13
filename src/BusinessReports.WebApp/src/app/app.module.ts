import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { CountryListComponent } from './dictionaries/country/country-list/country-list.component';
import { CountryEditComponent } from './dictionaries/country/country-edit/country-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionariesComponent,
    CountryListComponent,
    CountryEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule.forRoot([
          {
              path: '',
              component: HomeComponent
          },
          {
              path: 'dictionaries',
              component: DictionariesComponent,
              children: [
                  { path: '', redirectTo: 'country-list', pathMatch: 'full' },
                  { path: 'country-list', component: CountryListComponent }
              ]
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
