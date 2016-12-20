import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DictionariesComponent } from './dictionaries.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountyListComponent } from './county/county-list/county-list.component';
import { CityListComponent } from './city/city-list/city-list.component';

const dictionariesRoutes: Routes = [
    {
        path: 'dictionaries',
        component: DictionariesComponent,
        children: [
            { path: '', redirectTo: 'country-list', pathMatch: 'full' },
            { path: 'country-list', component: CountryListComponent },
            { path: 'county-list', component: CountyListComponent },
            { path: 'city-list', component: CityListComponent }
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