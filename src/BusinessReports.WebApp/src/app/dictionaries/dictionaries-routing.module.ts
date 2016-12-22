import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DictionariesComponent } from './dictionaries.component';
import { CountyListComponent } from './county/county-list/county-list.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CaenListComponent } from './caen/caen-list/caen-list.component';
import { IndicatorListComponent } from './indicator/indicator-list/indicator-list.component';

const dictionariesRoutes: Routes = [
    {
        path: 'dictionaries',
        component: DictionariesComponent,
        children: [
            { path: '', redirectTo: 'county-list', pathMatch: 'full' },
            { path: 'county-list', component: CountyListComponent },
            { path: 'city-list', component: CityListComponent },
            { path: 'caen-list', component: CaenListComponent },
            { path: 'indicator-list', component: IndicatorListComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dictionariesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DictionariesRoutingModule { }