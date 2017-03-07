import { Component, OnInit, HostBinding } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseListComponent} from '../../../avocado';

import { CaenEditComponent } from '../caen-edit/caen-edit.component';
import { Caen } from '../caen';
import { CaenService } from '../caen.service';

@Component({
  selector: 'caen-list',
  templateUrl: './caen-list.component.html',
  styleUrls: ['./caen-list.component.css']
})
export class CaenListComponent extends BaseListComponent<Caen> {

    constructor(
        slimLoadingBarService: SlimLoadingBarService,
        modalService: NgbModal,
        toastr: ToastsManager,
        crudService: CaenService) {

        super(slimLoadingBarService, modalService, toastr, crudService);
    }

    protected getEditComponentType(): Function {
        return CaenEditComponent;
    }
}
