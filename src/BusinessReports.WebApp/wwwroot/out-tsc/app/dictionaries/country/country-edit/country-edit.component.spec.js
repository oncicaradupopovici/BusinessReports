import { async, TestBed } from '@angular/core/testing';
import { CountryEditComponent } from './country-edit.component';
describe('CountryEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CountryEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CountryEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/WebTfs/BusinessReports2/src/BusinessReports.WebApp/src/app/dictionaries/country/country-edit/country-edit.component.spec.js.map