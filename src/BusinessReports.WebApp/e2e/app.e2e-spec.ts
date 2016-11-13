import { BusinessReportsWebAppPage } from './app.po';

describe('business-reports-web-app App', function() {
  let page: BusinessReportsWebAppPage;

  beforeEach(() => {
    page = new BusinessReportsWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
