var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseEditComponent } from '../../../avocado';
import { Country } from '../country';
import { CountryService } from '../country.service';
export var CountryEditComponent = (function (_super) {
    __extends(CountryEditComponent, _super);
    function CountryEditComponent(activeModal, crudService) {
        _super.call(this, activeModal, crudService);
    }
    CountryEditComponent.prototype.createNewModel = function () {
        return new Country();
    };
    CountryEditComponent = __decorate([
        Component({
            selector: 'country-edit',
            templateUrl: 'country-edit.component.html'
        }), 
        __metadata('design:paramtypes', [NgbActiveModal, CountryService])
    ], CountryEditComponent);
    return CountryEditComponent;
}(BaseEditComponent));
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/dictionaries/country/country-edit/country-edit.component.js.map