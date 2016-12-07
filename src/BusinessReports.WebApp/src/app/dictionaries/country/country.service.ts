import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Country } from './country';
import { BaseCrudService } from '../../avocado';

@Injectable()
export class CountryService extends BaseCrudService<Country> {

    constructor(http: Http) {
        super(http);
    }

    protected getApiPath(): string {
        return '/country';
    } 
}