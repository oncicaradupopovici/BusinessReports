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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ListDeleteConfirmationComponent } from './list/list-delete-confirmation/list-delete-confirmation.component';
import { ListSearchComponent } from './list/list-search/list-search.component';
export var AvocadoModule = (function () {
    function AvocadoModule() {
    }
    AvocadoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                NgbModule,
                SlimLoadingBarModule
            ],
            declarations: [
                ListDeleteConfirmationComponent,
                ListSearchComponent
            ],
            exports: [CommonModule, FormsModule, NgbModule, SlimLoadingBarModule, ListDeleteConfirmationComponent, ListSearchComponent],
            entryComponents: [ListDeleteConfirmationComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AvocadoModule);
    return AvocadoModule;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/avocado.module.js.map