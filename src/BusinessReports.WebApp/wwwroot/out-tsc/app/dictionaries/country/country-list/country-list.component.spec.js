import { async, TestBed } from '@angular/core/testing';
import { CountryListComponent } from './country-list.component';
describe('CountryListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CountryListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CountryListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/WebTfs/BusinessReports2/src/BusinessReports.WebApp/src/app/dictionaries/country/country-list/country-list.component.spec.js.map