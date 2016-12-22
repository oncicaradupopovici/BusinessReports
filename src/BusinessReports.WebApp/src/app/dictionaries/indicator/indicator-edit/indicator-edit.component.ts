import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseEditComponent, SelectListItem } from '../../../avocado';
import { Indicator, IndicatorType } from '../indicator';
import { IndicatorService } from '../indicator.service';


@Component({
  selector: 'indicator-edit',
  templateUrl: 'indicator-edit.component.html'
})
export class IndicatorEditComponent extends BaseEditComponent<Indicator> {

  public indicatorTypeList: SelectListItem[];
  private indicatorService: IndicatorService;

  get argumentsRequired(): boolean {
    return this.model != null && this.model.indicatorType == IndicatorType.Formula;
  }



  constructor(
    activeModal: NgbActiveModal,
    toastr: ToastsManager,
    crudService: IndicatorService) {

    super(activeModal, toastr, crudService);
    this.indicatorService = crudService;

  }

  public ngOnInit() {
    this.indicatorService.getSelectList().subscribe(
      list => {
        this.indicatorTypeList = list;
      },
      err => {
        this.handleApiError(err);
      });
  }

  public onIndicatorTypeChange() {
    this.model.arguments = "";
  }

  protected createNewModel(): Indicator {
    return new Indicator();
  }

}
