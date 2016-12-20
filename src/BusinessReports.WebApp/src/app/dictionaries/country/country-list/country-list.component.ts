import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

    constructor(
        slimLoadingBarService: SlimLoadingBarService,
        modalService: NgbModal,
        toastr: ToastsManager,
        crudService: CountryService) {

        super(slimLoadingBarService, modalService, toastr, crudService);
    }

    protected getEditComponentType(): any {
        return CountryEditComponent;
    }
}
