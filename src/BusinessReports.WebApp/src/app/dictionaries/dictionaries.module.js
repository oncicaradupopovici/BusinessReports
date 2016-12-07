var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { AvocadoModule } from '../avocado';
import { DictionariesRoutingModule } from './dictionaries-routing.module';
import { DictionariesComponent } from './dictionaries.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { CountryService } from './country/country.service';
export var DictionariesModule = (function () {
    function DictionariesModule() {
    }
    DictionariesModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], DictionariesModule);
    return DictionariesModule;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/dictionaries/dictionaries.module.js.map