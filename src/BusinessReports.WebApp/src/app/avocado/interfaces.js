export var PagedResult = (function () {
    function PagedResult(data, pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }
    return PagedResult;
}());
export var PageInfo = (function () {
    function PageInfo(page, pageSize, totalCount, totalPages) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.totalPages = totalPages;
    }
    return PageInfo;
}());
//# sourceMappingURL=D:/Git/BusinessReports/src/BusinessReports.WebApp/src/app/avocado/interfaces.js.map