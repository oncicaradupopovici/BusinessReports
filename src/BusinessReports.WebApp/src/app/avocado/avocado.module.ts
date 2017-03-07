import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { ListDeleteConfirmationComponent } from './list/list-delete-confirmation/list-delete-confirmation.component';
import { ListSearchComponent } from './list/list-search/list-search.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        SlimLoadingBarModule,
        ToastModule
    ],
    declarations: [
        ListDeleteConfirmationComponent, ListSearchComponent
    ],
    exports: [
        CommonModule, FormsModule, NgbModule, SlimLoadingBarModule, ToastModule, 
        ListDeleteConfirmationComponent, ListSearchComponent
    ],
    entryComponents: [ListDeleteConfirmationComponent],
    providers: [
    ]
})
export class AvocadoModule { }