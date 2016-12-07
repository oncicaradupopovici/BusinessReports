import { NgModule } from '@angular/core';

import { AvocadoModule } from '../avocado';
import { DictionariesRoutingModule } from './dictionaries-routing.module';

import { DictionariesComponent } from './dictionaries.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';

import { CountryService } from './country/country.service';

@NgModule({
    imports: [
        AvocadoModule,
        DictionariesRoutingModule
    ],
    declarations: [
        DictionariesComponent,
        CountryListComponent,
        CountryEditComponent
    ],
    entryComponents: [CountryEditComponent],
    providers: [
        CountryService
    ]
})
export class DictionariesModule { }