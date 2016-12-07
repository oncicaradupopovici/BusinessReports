import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { IModel, PagedResult, PageInfo} from '../interfaces';


export abstract class BaseCrudService<TModel extends IModel> {

    private _apiUrl: string = environment.apiUrl + this.getApiPath();

    constructor(private http: Http) {
    }

    public get(id: number): Observable<TModel> {
        return this.http.get(`${this._apiUrl}/${id}`) // ...using get request
            .share()
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    public getList(): Observable<TModel[]> {
        return this.http.get(this._apiUrl)
            .share()
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

    public getPage(search: string, page: number, pageSize: number): Observable<PagedResult<TModel>> {
        //let headers = new Headers({ 'Access-Control-Allow-Headers': 'x-pagination' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this._apiUrl}?search=${search}&page=${page}&pageSize=${pageSize}`/*, options*/)
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

        return this.http.post(this._apiUrl, bodyString, options)
            .share()
            .catch(this.handleError); //...errors if any

    }

    public update(document: TModel): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify(document); // Stringify payload

        return this.http.put(`${this._apiUrl}/${document.id}`, bodyString, options)
            //.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .share()
            .catch(this.handleError); //...errors if any
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(`${this._apiUrl}/${id}`) // ...using put request
            //.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .share()
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

    protected abstract getApiPath(): string; // => '/country'
}