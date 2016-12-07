var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export var BaseEditComponent = (function () {
    function BaseEditComponent(activeModal, crudService) {
        this.activeModal = activeModal;
        this.crudService = crudService;
        this.onAfterSave = new EventEmitter();
    }
    BaseEditComponent.prototype.ngOnInit = function () {
    };
    BaseEditComponent.prototype.setNewModel = function () {
        this.setModel(this.createNewModel());
    };
    BaseEditComponent.prototype.setModelFor = function (id) {
        var _this = this;
        var obs = this.crudService.get(id);
        obs.subscribe(function (e) {
            _this.setModel(e);
        }, function (err) { return console.log(err); });
        return obs;
    };
    BaseEditComponent.prototype.save = function () {
        var _this = this;
        var asyncOperation;
        if (this.model.id)
            asyncOperation = this.crudService.update(this.model);
        else
            asyncOperation = this.crudService.create(this.model);
        asyncOperation.subscribe(function (a) {
            _this.close();
            _this.onAfterSave.emit();
        }, function (err) { return console.log(err); });
    };
    BaseEditComponent.prototype.close = function () {
        this.activeModal.close();
    };
    BaseEditComponent.prototype.afterModelHooked = function () {
        this.resetForm();
    };
    BaseEditComponent.prototype.setModel = function (model) {
        this.model = model;
        this.afterModelHooked();
    };
    BaseEditComponent.prototype.resetForm = function () {
        if (this.form != null)
            this.form.reset(this.model);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], BaseEditComponent.prototype, "onAfterSave", void 0);
    __decorate([
        ViewChild('form'), 
        __metadata('design:type', NgForm)
    ], BaseEditComponent.prototype, "form", void 0);
    return BaseEditComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/edit/base-edit-component.js.map