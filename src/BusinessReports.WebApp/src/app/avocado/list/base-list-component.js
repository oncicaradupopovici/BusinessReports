import { ListDeleteConfirmationComponent } from './list-delete-confirmation/list-delete-confirmation.component';
export var BaseListComponent = (function () {
    function BaseListComponent(slimLoadingBarService, modalService, crudService) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.modalService = modalService;
        this.crudService = crudService;
        this.pageSize = 10;
        this.page = 1;
        this.totalCount = 0;
        this.searchTerm = '';
    }
    BaseListComponent.prototype.ngOnInit = function () {
        this.loadPage(1);
    };
    BaseListComponent.prototype.loadPage = function (page, scrollTop) {
        var _this = this;
        if (scrollTop === void 0) { scrollTop = false; }
        this.slimLoadingBarService.start();
        this.crudService.getPage(this.searchTerm, page, this.pageSize).subscribe(function (result) {
            _this.list = result.data;
            _this.page = result.pageInfo.page;
            _this.totalCount = result.pageInfo.totalCount;
            if (scrollTop)
                $('html,body').animate({ scrollTop: 0 }, 400);
            _this.slimLoadingBarService.complete();
        }, function (err) { return console.log(err); });
    };
    BaseListComponent.prototype.reloadCurrentPage = function () {
        this.loadPage(this.page);
    };
    BaseListComponent.prototype.delete = function (id) {
        var _this = this;
        this.crudService.delete(id)
            .subscribe(function (c) {
            _this.reloadCurrentPage();
        });
    };
    BaseListComponent.prototype.performSearch = function (term) {
        this.searchTerm = term;
        this.reloadCurrentPage();
    };
    BaseListComponent.prototype.showAdd = function () {
        var _this = this;
        var modal = this.modalService.open(this.getEditComponentType());
        var editComponent = modal.componentInstance;
        editComponent.setNewModel();
        editComponent.onAfterSave.subscribe(function (model) { _this.reloadCurrentPage(); });
    };
    BaseListComponent.prototype.showEditFor = function (id) {
        var _this = this;
        var modal = this.modalService.open(this.getEditComponentType());
        var editComponent = modal.componentInstance;
        editComponent.setModelFor(id);
        editComponent.onAfterSave.subscribe(function (model) { _this.reloadCurrentPage(); });
    };
    BaseListComponent.prototype.showDeleteConfirmationFor = function (id) {
        var _this = this;
        var modal = this.modalService.open(ListDeleteConfirmationComponent);
        var deleteConfirmationComponent = modal.componentInstance;
        deleteConfirmationComponent.onConfirmDelete.subscribe(function (x) { _this.delete(id); });
    };
    return BaseListComponent;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/list/base-list-component.js.map