import { NgModule } from '@angular/core';

import { AvocadoModule } from '../avocado';
import { DictionariesRoutingModule } from './dictionaries-routing.module';

import { DictionariesComponent } from './dictionaries.component';

import { CountyListComponent } from './county/county-list/county-list.component';
import { CountyEditComponent } from './county/county-edit/county-edit.component';
import { CountyService } from './county/county.service';

import { CityListComponent } from './city/city-list/city-list.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityService } from './city/city.service';

import { CaenListComponent } from './caen/caen-list/caen-list.component';
import { CaenEditComponent } from './caen/caen-edit/caen-edit.component';
import { CaenService } from './caen/caen.service';

import { IndicatorListComponent } from './indicator/indicator-list/indicator-list.component';
import { IndicatorEditComponent } from './indicator/indicator-edit/indicator-edit.component';
import { IndicatorService } from './indicator/indicator.service';

@NgModule({
    imports: [
        AvocadoModule,
        DictionariesRoutingModule
    ],
    declarations: [
        DictionariesComponent,
        CountyListComponent,
        CountyEditComponent,
        CityListComponent,
        CityEditComponent,
        CaenListComponent,
        CaenEditComponent,
        IndicatorListComponent,
        IndicatorEditComponent
    ],
    entryComponents: [CountyEditComponent, CityEditComponent, CaenEditComponent, IndicatorEditComponent],
    providers: [
        CountyService,
        CityService,
        CaenService,
        IndicatorService
    ]
})
export class DictionariesModule { }