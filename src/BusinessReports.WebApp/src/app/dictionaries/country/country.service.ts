import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Country } from './country';
import { environment } from '../../../environments/environment';

@Injectable()
export class CountryService {
    private _apiUrl: string = environment.apiUrl + '/country';

    constructor(private http: Http) {
    }

    public get(id: number): Observable<Country> {
        return this.http.get(`${this._apiUrl}/${id}`) // ...using get request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    public getList(): Observable<Country[]> {
        return this.http.get(this._apiUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

    public create(document: Country): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify(document); // Stringify payload

        return this.http.post(this._apiUrl, bodyString, options)
            .catch(this.handleError); //...errors if any

    }

    public update(document: Country): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify(document); // Stringify payload

        return this.http.put(this._apiUrl, bodyString, options)
            //.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(`${this._apiUrl}/${id}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}