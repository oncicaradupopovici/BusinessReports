import { async, TestBed } from '@angular/core/testing';
import { ListDeleteConfirmationComponent } from './list-delete-confirmation.component';
describe('ListDeleteConfirmationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListDeleteConfirmationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListDeleteConfirmationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/list/list-delete-confirmation/list-delete-confirmation.component.spec.js.map