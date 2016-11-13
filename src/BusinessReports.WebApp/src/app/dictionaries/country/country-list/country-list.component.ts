import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryEditComponent } from '../country-edit/country-edit.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  providers: [CountryService]
})
export class CountryListComponent implements OnInit {
    public list: Country[];
    public currentPageNo: number;
    public pageSize: number;
    public currentEd
    @ViewChild(CountryEditComponent) editComponent: CountryEditComponent

    constructor(private _crudService: CountryService) {

    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this._crudService.getList().subscribe(
            data => this.list = data,
            err => console.log(err)
        );
    }

    onAfterEditComponentSaved() {
        this.loadData();
    }

    showAdd() {
        this.editComponent.newModel();
        this.editComponent.show();
    }

    showEdit(id: number) {
        this.editComponent.loadModelForId(id)
            .subscribe(c => this.editComponent.show());
    }
}
