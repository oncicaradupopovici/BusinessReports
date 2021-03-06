import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseEditComponent, SelectListItem } from '../../../avocado';
import { County } from '../county';
import { CountyService } from '../county.service';


@Component({
  selector: 'county-edit',
  templateUrl: 'county-edit.component.html'
})
export class CountyEditComponent extends BaseEditComponent<County> {

  constructor(
    activeModal: NgbActiveModal,
    toastr: ToastsManager,
    crudService: CountyService) {

    super(activeModal, toastr, crudService);
  }

  protected createNewModel(): County {
    return new County();
  }

}
