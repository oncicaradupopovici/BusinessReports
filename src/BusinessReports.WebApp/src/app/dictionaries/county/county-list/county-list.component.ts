import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseListComponent} from '../../../avocado';

import { CountyEditComponent } from '../county-edit/county-edit.component';
import { County } from '../county';
import { CountyService } from '../county.service';

@Component({
  selector: 'county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.css']
})
export class CountyListComponent extends BaseListComponent<County> {

    constructor(
        slimLoadingBarService: SlimLoadingBarService,
        modalService: NgbModal,
        toastr: ToastsManager,
        crudService: CountyService) {

        super(slimLoadingBarService, modalService, toastr, crudService);
    }

    protected getEditComponentType(): any {
        return CountyEditComponent;
    }
}
