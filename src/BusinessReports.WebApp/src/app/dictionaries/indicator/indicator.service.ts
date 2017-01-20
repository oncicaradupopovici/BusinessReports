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

    protected get ressourceRelativePath(): string {
        return '/indicators';
    }

    public getIndicatorTypeSelectList(): Observable<SelectListItem[]> {
        return this.http.get(`${environment.apiBaseUrl}/indicatortypes/select-list`)
            .share()
            .map((res: Response) => res.json())
            .catch(this.handleError); //...errors if any
    }

     
}