import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { PagedResult } from '../interfaces';
export var BaseCrudService = (function () {
    function BaseCrudService(http) {
        this.http = http;
        this._apiUrl = environment.apiUrl + this.getApiPath();
    }
    BaseCrudService.prototype.get = function (id) {
        return this.http.get(this._apiUrl + "/" + id) // ...using get request
            .share()
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.getList = function () {
        return this.http.get(this._apiUrl)
            .share()
            .map(function (res) { return res.json(); })
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.getPage = function (search, page, pageSize) {
        //let headers = new Headers({ 'Access-Control-Allow-Headers': 'x-pagination' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(this._apiUrl + "?search=" + search + "&page=" + page + "&pageSize=" + pageSize /*, options*/)
            .share()
            .map(function (res) {
            var data = (res.json());
            var pageInfo = (JSON.parse(res.headers.get('x-pagination')));
            var result = new PagedResult(data, pageInfo);
            return result;
        })
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.create = function (document) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var bodyString = JSON.stringify(document); // Stringify payload
        return this.http.post(this._apiUrl, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.update = function (document) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var bodyString = JSON.stringify(document); // Stringify payload
        return this.http.put(this._apiUrl + "/" + document.id, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.delete = function (id) {
        return this.http.delete(this._apiUrl + "/" + id) // ...using put request
            .share()
            .catch(this.handleError); //...errors if any
    };
    BaseCrudService.prototype.handleError = function (error) {
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
    return BaseCrudService;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/service/base-crud-service.js.map