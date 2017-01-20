import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { City } from './city';
import { BaseCrudService } from '../../avocado';

@Injectable()
export class CityService extends BaseCrudService<City> {

    constructor(http: Http) {
        super(http);
    }

    protected get ressourceRelativePath(): string {
        return '/cities';
    } 
}
