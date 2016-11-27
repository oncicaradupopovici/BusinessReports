var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
export var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this._apiUrl = environment.apiUrl + '/countries';
    }
    CountryService.prototype.get = function (id) {
        return this.http.get(this._apiUrl + "/" + id) // ...using get request
            .share()
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    };
    CountryService.prototype.getList = function () {
        return this.http.get(this._apiUrl)
            .share()
            .map(function (res) { return res.json(); })
            .catch(this.handleError); //...errors if any
    };
    CountryService.prototype.create = function (document) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var bodyString = JSON.stringify(document); // Stringify payload
        return this.http.post(this._apiUrl, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any
    };
    CountryService.prototype.update = function (document) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var bodyString = JSON.stringify(document); // Stringify payload
        return this.http.put(this._apiUrl, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any
    };
    CountryService.prototype.delete = function (id) {
        return this.http.delete(this._apiUrl + "/" + id) // ...using put request
            .share()
            .catch(this.handleError); //...errors if any
    };
    CountryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    CountryService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], CountryService);
    return CountryService;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/dictionaries/country/country.service.js.map