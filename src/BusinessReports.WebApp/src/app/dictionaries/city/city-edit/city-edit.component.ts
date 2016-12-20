import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BaseEditComponent, SelectListItem } from '../../../avocado';
import { City } from '../city';
import { CityService } from '../city.service';
import { CountyService } from '../../county/county.service';


@Component({
  selector: 'city-edit',
  templateUrl: 'city-edit.component.html'
})
export class CityEditComponent extends BaseEditComponent<City> {

  public countyList: SelectListItem[];

  constructor(
    activeModal: NgbActiveModal,
    toastr: ToastsManager,
    crudService: CityService,
    private countyService: CountyService) {

    super(activeModal, toastr, crudService);
  }

  protected createNewModel(): City {
    return new City();
  }

  public ngOnInit() {
    this.countyService.getSelectList().subscribe(
      list => {
        this.countyList = list;
      },
      err => {
        this.handleApiError(err);
      });
  }

}
