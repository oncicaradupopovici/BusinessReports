var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export var ListDeleteConfirmationComponent = (function () {
    function ListDeleteConfirmationComponent(activeModal) {
        this.activeModal = activeModal;
        this.onConfirmDelete = new EventEmitter();
    }
    ListDeleteConfirmationComponent.prototype.ngOnInit = function () {
    };
    ListDeleteConfirmationComponent.prototype.close = function () {
        this.activeModal.close();
    };
    ListDeleteConfirmationComponent.prototype.delete = function () {
        this.onConfirmDelete.emit();
        this.close();
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ListDeleteConfirmationComponent.prototype, "onConfirmDelete", void 0);
    ListDeleteConfirmationComponent = __decorate([
        Component({
            selector: 'list-delete-confirmation',
            templateUrl: './list-delete-confirmation.component.html',
            styleUrls: ['./list-delete-confirmation.component.css']
        }), 
        __metadata('design:paramtypes', [NgbActiveModal])
    ], ListDeleteConfirmationComponent);
    return ListDeleteConfirmationComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/list/list-delete-confirmation/list-delete-confirmation.component.js.map