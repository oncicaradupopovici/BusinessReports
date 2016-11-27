import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Country } from '../country';
import { CountryService } from '../country.service';


//declare var $: JQueryStatic;

@Component({
    selector: 'country-edit',
    templateUrl: 'country-edit.component.html',
    exportAs: 'editComponent'
})
export class CountryEditComponent implements OnInit {

    model: Country;

    @Output() onAfterSave = new EventEmitter();

    // // Reset the form with a new hero AND restore 'pristine' class state
    // // by toggling 'active' flag which causes the form
    // // to be removed/re-added in a tick via NgIf
    // // TODO: Workaround until NgForm has a reset method (#6822)
    // active = true;

    @ViewChild('form') _form : NgForm;

    constructor(private _crudService: CountryService, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        this.newModel();
    }

    afterModelHooked() {
        this.resetForm();
    }

    setModel(model: Country){
        
        this.model = model;
        this.afterModelHooked();
    }

    newModel() {
        this.setModel(new Country());
    }

    loadModelForId(id: number): Observable<Country> {
        let obs = this._crudService.get(id);
        obs.subscribe(
            e => {
                this.setModel(e);
            },
            err => console.log(err)
        );
        return obs;
    }

    save() {
        let asyncOperation: Observable<any>;
        if (this.model.id)
            asyncOperation = this._crudService.update(this.model);
        else
            asyncOperation = this._crudService.create(this.model);

        asyncOperation.subscribe(
            a => {
                this.close();
                this.onAfterSave.emit();
            },
            err => console.log(err)
        );
    }

    close() {
        $(this._elementRef.nativeElement).find('#editWindow').modal('hide');
    }

    show() {
        $(this._elementRef.nativeElement).find('#editWindow').modal('show');
    }

    resetForm() {
        this._form.reset(this.model);
    }

    log(whatever: any) {
        console.log(whatever);
    }
}
