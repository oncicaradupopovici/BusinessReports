"use strict";
var app_po_1 = require('./app.po');
describe('business-reports-web-app App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.BusinessReportsWebAppPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map