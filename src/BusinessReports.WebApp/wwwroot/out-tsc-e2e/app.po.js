"use strict";
var protractor_1 = require('protractor');
var BusinessReportsWebAppPage = (function () {
    function BusinessReportsWebAppPage() {
    }
    BusinessReportsWebAppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    BusinessReportsWebAppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return BusinessReportsWebAppPage;
}());
exports.BusinessReportsWebAppPage = BusinessReportsWebAppPage;
//# sourceMappingURL=app.po.js.map