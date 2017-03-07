import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseListComponent} from '../../../avocado';

import { IndicatorEditComponent } from '../indicator-edit/indicator-edit.component';
import { Indicator } from '../indicator';
import { IndicatorService } from '../indicator.service';

@Component({
  selector: 'indicator-list',
  templateUrl: './indicator-list.component.html',
  styleUrls: ['./indicator-list.component.css']
})
export class IndicatorListComponent extends BaseListComponent<Indicator> {

    constructor(
        slimLoadingBarService: SlimLoadingBarService,
        modalService: NgbModal,
        toastr: ToastsManager,
        crudService: IndicatorService) {

        super(slimLoadingBarService, modalService, toastr, crudService);
    }

    protected getEditComponentType(): Function {
        return IndicatorEditComponent;
    }
}
