import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { IModel, PagedResult, PageInfo, ApiError, SelectListItem } from '../interfaces';


export abstract class BaseCrudService<TModel extends IModel> {

    
    protected abstract get ressourceRelativePath(): string ;
    private get ressourceAbsoluteUrl(): string {
        return environment.apiBaseUrl + this.ressourceRelativePath;
    }

    constructor(protected http: Http) {
    }

    public get(id: number): Observable<TModel> {
        return this.http.get(`${this.ressourceAbsoluteUrl}/${id}`) // ...using get request
            .share()
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    public getList(): Observable<TModel[]> {
        return this.http.get(this.ressourceAbsoluteUrl)
            .share()
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

    public getSelectList(): Observable<SelectListItem[]> {
        return this.http.get(`${this.ressourceAbsoluteUrl}/select-list`)
            .share()
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

    public getPage(search: string, page: number, pageSize: number): Observable<PagedResult<TModel>> {
        //let headers = new Headers({ 'Access-Control-Allow-Headers': 'x-pagination' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this.ressourceAbsoluteUrl}?search=${search}&page=${page}&pageSize=${pageSize}`/*, options*/)
            .share()
            .map((res: Response) => {
                var data = <TModel[]>(res.json());
                var pageInfo = <PageInfo>(JSON.parse(res.headers.get('x-pagination')));
                var result = new PagedResult(data, pageInfo);
                return result;
            })
            .catch(this.handleError); //...errors if any
    }

    public create(document: TModel): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify(document); // Stringify payload

        return this.http.post(this.ressourceAbsoluteUrl, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any

    }

    public update(document: TModel): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify(document); // Stringify payload

        return this.http.put(`${this.ressourceAbsoluteUrl}/${document.id}`, bodyString, options)
            //.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .share()
            .catch(this.handleError); //...errors if any
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(`${this.ressourceAbsoluteUrl}/${id}`) // ...using put request
            //.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .share()
            .catch(this.handleError); //...errors if any
    }

    //private handleError(error: Response | any) {
    //    // In a real world app, we might use a remote logging infrastructure
    //    let errMsg: string;
    //    if (error instanceof Response) {
    //        const body = error.json() || '';
    //        const err = body.error || JSON.stringify(body);
    //        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //    } else {
    //        errMsg = error.message ? error.message : error.toString();
    //    }
    //    console.error(errMsg);
    //    return Observable.throw(errMsg);
    //}

    protected handleError(error: Response | any) {
        let jsonResponse = error.json();
        let apiError = new ApiError();
        apiError.message = jsonResponse.message;
        apiError.details = jsonResponse.details;
        apiError.validations = jsonResponse.validations;
        apiError.status = error.status;
        apiError.statusText = error.statusText;

        console.error(JSON.stringify(apiError));
        return Observable.throw(apiError);
    }
    
}