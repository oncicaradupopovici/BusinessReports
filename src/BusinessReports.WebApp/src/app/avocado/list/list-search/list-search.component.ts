import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

    @Output() search = new EventEmitter();

    private searchTermStream = new Subject<string>();

    constructor() { }

    ngOnInit() {
        this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(term => {
                this.emitSearch(term);
            });
    }

    public onSearchKeyUp(term: string) {
        this.searchTermStream.next(term);
    }

    public emitSearch(term: string) {
        this.search.emit(term);
    }



}
