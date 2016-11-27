var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/app.module.js.map