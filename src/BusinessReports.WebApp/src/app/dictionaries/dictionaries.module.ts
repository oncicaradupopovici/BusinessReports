import { NgModule } from '@angular/core';

import { AvocadoModule } from '../avocado';
import { DictionariesRoutingModule } from './dictionaries-routing.module';

import { DictionariesComponent } from './dictionaries.component';

import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { CountryService } from './country/country.service';

import { CountyListComponent } from './county/county-list/county-list.component';
import { CountyEditComponent } from './county/county-edit/county-edit.component';
import { CountyService } from './county/county.service';

import { CityListComponent } from './city/city-list/city-list.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityService } from './city/city.service';

@NgModule({
    imports: [
        AvocadoModule,
        DictionariesRoutingModule
    ],
    declarations: [
        DictionariesComponent,
        CountryListComponent,
        CountryEditComponent,
        CountyListComponent,
        CountyEditComponent,
        CityListComponent,
        CityEditComponent
    ],
    entryComponents: [CountryEditComponent, CountyEditComponent, CityEditComponent],
    providers: [
        CountryService,
        CountyService,
        CityService
    ]
})
export class DictionariesModule { }