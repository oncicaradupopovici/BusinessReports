import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { County } from './county';
import { BaseCrudService } from '../../avocado';

@Injectable()
export class CountyService extends BaseCrudService<County> {

    constructor(http: Http) {
        super(http);
    }

    protected getApiPath(): string {
        return '/county';
    } 
}
