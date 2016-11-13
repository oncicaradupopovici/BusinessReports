import { async, TestBed } from '@angular/core/testing';
import { DictionariesComponent } from './dictionaries.component';
describe('DictionariesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DictionariesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DictionariesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/WebTfs/BusinessReports2/src/BusinessReports.WebApp/src/app/dictionaries/dictionaries.component.spec.js.map