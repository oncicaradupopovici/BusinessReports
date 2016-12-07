import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseListComponent} from '../../../avocado';

import { CountryEditComponent } from '../country-edit/country-edit.component';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent extends BaseListComponent<Country> {

    constructor(slimLoadingBarService: SlimLoadingBarService, modalService: NgbModal, crudService: CountryService) {
        super(slimLoadingBarService, modalService, crudService)
    }

    protected getEditComponentType(): any {
        return CountryEditComponent;
    }
}
