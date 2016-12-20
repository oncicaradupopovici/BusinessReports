import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseListComponent} from '../../../avocado';

import { CityEditComponent } from '../city-edit/city-edit.component';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent extends BaseListComponent<City> {

    constructor(
        slimLoadingBarService: SlimLoadingBarService,
        modalService: NgbModal,
        toastr: ToastsManager,
        crudService: CityService) {

        super(slimLoadingBarService, modalService, toastr, crudService);
    }

    protected getEditComponentType(): any {
        return CityEditComponent;
    }
}
