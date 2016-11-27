var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from '../country';
import { CountryService } from '../country.service';
//declare var $: JQueryStatic;
export var CountryEditComponent = (function () {
    function CountryEditComponent(_crudService, _elementRef) {
        this._crudService = _crudService;
        this._elementRef = _elementRef;
        this.onAfterSave = new EventEmitter();
    }
    CountryEditComponent.prototype.ngOnInit = function () {
        this.newModel();
    };
    CountryEditComponent.prototype.afterModelHooked = function () {
        this.resetForm();
    };
    CountryEditComponent.prototype.setModel = function (model) {
        this.model = model;
        this.afterModelHooked();
    };
    CountryEditComponent.prototype.newModel = function () {
        this.setModel(new Country());
    };
    CountryEditComponent.prototype.loadModelForId = function (id) {
        var _this = this;
        var obs = this._crudService.get(id);
        obs.subscribe(function (e) {
            _this.setModel(e);
        }, function (err) { return console.log(err); });
        return obs;
    };
    CountryEditComponent.prototype.save = function () {
        var _this = this;
        var asyncOperation;
        if (this.model.id)
            asyncOperation = this._crudService.update(this.model);
        else
            asyncOperation = this._crudService.create(this.model);
        asyncOperation.subscribe(function (a) {
            _this.close();
            _this.onAfterSave.emit();
        }, function (err) { return console.log(err); });
    };
    CountryEditComponent.prototype.close = function () {
        $(this._elementRef.nativeElement).find('#editWindow').modal('hide');
    };
    CountryEditComponent.prototype.show = function () {
        $(this._elementRef.nativeElement).find('#editWindow').modal('show');
    };
    CountryEditComponent.prototype.resetForm = function () {
        this._form.reset(this.model);
    };
    CountryEditComponent.prototype.log = function (whatever) {
        console.log(whatever);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CountryEditComponent.prototype, "onAfterSave", void 0);
    __decorate([
        ViewChild('form'), 
        __metadata('design:type', NgForm)
    ], CountryEditComponent.prototype, "_form", void 0);
    CountryEditComponent = __decorate([
        Component({
            selector: 'country-edit',
            templateUrl: 'country-edit.component.html',
            exportAs: 'editComponent'
        }), 
        __metadata('design:paramtypes', [CountryService, ElementRef])
    ], CountryEditComponent);
    return CountryEditComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/dictionaries/country/country-edit/country-edit.component.js.map