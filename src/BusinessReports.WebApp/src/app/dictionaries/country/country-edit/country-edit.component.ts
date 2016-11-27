import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs/Observable';
//declare var $: JQueryStatic;

@Component({
    selector: 'country-edit',
    templateUrl: 'country-edit.component.html',
    exportAs: 'editComponent'
})
export class CountryEditComponent implements OnInit {

    model: Country;

    @Output() onAfterSave = new EventEmitter();

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    constructor(private _crudService: CountryService, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        this.newModel();
    }

    newModel() {
        this.model = new Country();
        this.hookModel();
    }

    loadModelForId(id: number): Observable<Country> {
        let obs = this._crudService.get(id);
        obs.subscribe(
            e => {
                this.model = e;
                this.hookModel();
            },
            err => console.log(err)
        );
        return obs;
    }

    hookModel() {
        this.resetValidators();
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

    resetValidators() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    log(whatever: any) {
        console.log(whatever);
    }
}
