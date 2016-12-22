import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseEditComponent, SelectListItem } from '../../../avocado';
import { Caen } from '../caen';
import { CaenService } from '../caen.service';


@Component({
  selector: 'caen-edit',
  templateUrl: 'caen-edit.component.html'
})
export class CaenEditComponent extends BaseEditComponent<Caen> {

  constructor(
    activeModal: NgbActiveModal,
    toastr: ToastsManager,
    crudService: CaenService) {

    super(activeModal, toastr, crudService);
  }

  protected createNewModel(): Caen {
    return new Caen();
  }

}
