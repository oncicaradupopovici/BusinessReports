import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { IModel, ApiError } from '../interfaces';
import { BaseCrudService } from '../service/base-crud-service';

export abstract class BaseEditComponent<TModel extends IModel> implements OnInit {

    @Output() onAfterSave = new EventEmitter();
    @ViewChild('form') form: NgForm;

    public model: TModel;

    constructor(
        private activeModal: NgbActiveModal,
        protected toastr: ToastsManager,
        private crudService: BaseCrudService<TModel>
    ) {
    }

    public ngOnInit() {
    }

    public setNewModel() {
        this.setModel(this.createNewModel());
    }

    public setModelFor(id: number): Observable<TModel> {
        let obs = this.crudService.get(id);
        obs.subscribe(
            e => {
                this.setModel(e);
            },
            err => {
                this.handleApiError(err);
            }
        );
        return obs;
    }

    public save() {
        let asyncOperation: Observable<any>;
        if (this.model.id)
            asyncOperation = this.crudService.update(this.model);
        else
            asyncOperation = this.crudService.create(this.model);

        asyncOperation.subscribe(
            a => {
                this.toastr.success("Saved successfully", "Success");
                this.close();
                this.onAfterSave.emit();
            },
            err => {
                this.handleApiError(err);
            }
        );
    }

    public close() {
        this.activeModal.close();
    }

    protected abstract createNewModel(): TModel


    private afterModelHooked() {
        this.resetForm();
    }

    private setModel(model: TModel) {
        this.model = model;
        this.afterModelHooked();
    }

    private resetForm() {
        if (this.form != null)
            this.form.reset(this.model);
    }

    protected handleApiError(err: ApiError) {
        if (err.isValidationError()) {
            this.toastr.error(err.getFriendlyValidation(), err.getFriendlyMessage(), { enableHTML: true, dismiss: 'click' });
        }
        else {
            this.toastr.error(err.getFriendlyMessage(), err.getFriendlyStatus(), { dismiss: 'click' });
        }
    }
}