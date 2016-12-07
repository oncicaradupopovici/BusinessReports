import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseEditComponent } from '../../../avocado';
import { Country } from '../country';
import { CountryService } from '../country.service';


@Component({
    selector: 'country-edit',
    templateUrl: 'country-edit.component.html'
})
export class CountryEditComponent extends BaseEditComponent<Country> {

    constructor(activeModal: NgbActiveModal, crudService: CountryService) {
        super(activeModal, crudService);
    }

    protected createNewModel(): Country {
        return new Country();
    }

}
