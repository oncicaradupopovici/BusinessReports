import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Indicator } from './indicator';
import { BaseCrudService, SelectListItem } from '../../avocado';
import { environment } from '../../../environments/environment';


@Injectable()
export class IndicatorService extends BaseCrudService<Indicator> {

    constructor(http: Http) {
        super(http);
    }

    public getSelectList(): Observable<SelectListItem[]> {
        return this.http.get(`${environment.apiUrl}/indicatortype/select-list`)
            .share()
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

    protected getApiPath(): string {
        return '/indicator';
    } 
}