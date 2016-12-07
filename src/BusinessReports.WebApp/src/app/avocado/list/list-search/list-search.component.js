var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export var ListSearchComponent = (function () {
    function ListSearchComponent() {
        this.search = new EventEmitter();
        this.searchTermStream = new Subject();
    }
    ListSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.emitSearch(term);
        });
    };
    ListSearchComponent.prototype.onSearchKeyUp = function (term) {
        this.searchTermStream.next(term);
    };
    ListSearchComponent.prototype.emitSearch = function (term) {
        this.search.emit(term);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ListSearchComponent.prototype, "search", void 0);
    ListSearchComponent = __decorate([
        Component({
            selector: 'list-search',
            templateUrl: './list-search.component.html',
            styleUrls: ['./list-search.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ListSearchComponent);
    return ListSearchComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/list/list-search/list-search.component.js.map