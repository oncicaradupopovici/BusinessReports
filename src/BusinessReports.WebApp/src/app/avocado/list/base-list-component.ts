import { OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IModel } from '../interfaces';
import { ListDeleteConfirmationComponent } from './list-delete-confirmation/list-delete-confirmation.component';
import { BaseEditComponent } from '../edit/base-edit-component'

export abstract class BaseListComponent<TModel extends IModel> implements OnInit {

    public list: TModel[];
    public pageSize: number = 10;
    public page: number = 1;
    public totalCount: number = 0;
    private searchTerm: string = ''; 

    constructor(protected slimLoadingBarService: SlimLoadingBarService, protected modalService: NgbModal, protected crudService: any) {
    }

    public ngOnInit() {
        this.loadPage(1);
    }

    public loadPage(page: number, scrollTop: boolean = false) {
        this.slimLoadingBarService.start();
        this.crudService.getPage(this.searchTerm, page, this.pageSize).subscribe(
            result => {
                this.list = result.data;
                this.page = result.pageInfo.page;
                this.totalCount = result.pageInfo.totalCount;

                if (scrollTop)
                    $('html,body').animate({ scrollTop: 0 }, 400);

                this.slimLoadingBarService.complete();
            },
            err => console.log(err)
        );
    }

    public reloadCurrentPage() {
        this.loadPage(this.page);
    }

    public delete(id: number) {
        this.crudService.delete(id)
            .subscribe(c => {
                this.reloadCurrentPage();
            });
    }

    public performSearch(term: string) {
        this.searchTerm = term;
        this.reloadCurrentPage();
    }

    public showAdd() {
        let modal = this.modalService.open(this.getEditComponentType());
        let editComponent = <BaseEditComponent<TModel>>modal.componentInstance;
        editComponent.setNewModel();
        editComponent.onAfterSave.subscribe(model => { this.reloadCurrentPage() });
    }

    public showEditFor(id: number) {
        let modal = this.modalService.open(this.getEditComponentType());
        let editComponent = <BaseEditComponent<TModel>>modal.componentInstance;
        editComponent.setModelFor(id);
        editComponent.onAfterSave.subscribe(model => { this.reloadCurrentPage() });
    }

    public showDeleteConfirmationFor(id: number) {
        let modal = this.modalService.open(ListDeleteConfirmationComponent);
        let deleteConfirmationComponent = <ListDeleteConfirmationComponent>modal.componentInstance;
        deleteConfirmationComponent.onConfirmDelete.subscribe(x => { this.delete(id) });
    }

    protected abstract getEditComponentType(): any
}