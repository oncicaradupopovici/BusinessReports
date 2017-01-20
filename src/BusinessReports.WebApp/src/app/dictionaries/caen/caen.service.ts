import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Caen } from './caen';
import { BaseCrudService } from '../../avocado';

@Injectable()
export class CaenService extends BaseCrudService<Caen> {

    constructor(http: Http) {
        super(http);
    }

    protected get ressourceRelativePath(): string {
        return '/caens';
    } 
}
