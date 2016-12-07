import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-delete-confirmation',
  templateUrl: './list-delete-confirmation.component.html',
  styleUrls: ['./list-delete-confirmation.component.css']
})
export class ListDeleteConfirmationComponent implements OnInit {

    @Output() onConfirmDelete = new EventEmitter();

    constructor(private activeModal: NgbActiveModal) {
    }

    public ngOnInit() {
    }

    public close() {
        this.activeModal.close();
    }

    public delete() {
        this.onConfirmDelete.emit();
        this.close();
    }

}
