var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryEditComponent } from '../country-edit/country-edit.component';
export var CountryListComponent = (function () {
    function CountryListComponent(_crudService) {
        this._crudService = _crudService;
    }
    CountryListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CountryListComponent.prototype.loadData = function () {
        var _this = this;
        this._crudService.getList().subscribe(function (data) { return _this.list = data; }, function (err) { return console.log(err); });
    };
    CountryListComponent.prototype.onAfterEditComponentSaved = function () {
        this.loadData();
    };
    CountryListComponent.prototype.showAdd = function () {
        this.editComponent.newModel();
        this.editComponent.show();
    };
    CountryListComponent.prototype.showEdit = function (id) {
        var _this = this;
        this.editComponent.loadModelForId(id)
            .subscribe(function (c) { return _this.editComponent.show(); });
    };
    __decorate([
        ViewChild(CountryEditComponent), 
        __metadata('design:type', CountryEditComponent)
    ], CountryListComponent.prototype, "editComponent", void 0);
    CountryListComponent = __decorate([
        Component({
            selector: 'app-country-list',
            templateUrl: './country-list.component.html',
            styleUrls: ['./country-list.component.css'],
            providers: [CountryService]
        }), 
        __metadata('design:paramtypes', [CountryService])
    ], CountryListComponent);
    return CountryListComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/dictionaries/country/country-list/country-list.component.js.map