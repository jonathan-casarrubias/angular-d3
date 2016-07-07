import { AngularD3Page } from './app.po';

describe('angular-d3 App', function() {
  let page: AngularD3Page;

  beforeEach(() => {
    page = new AngularD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
