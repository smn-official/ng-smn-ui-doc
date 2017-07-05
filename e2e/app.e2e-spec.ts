import { NgSmnUiDocPage } from './app.po';

describe('ng-smn-ui-doc App', () => {
  let page: NgSmnUiDocPage;

  beforeEach(() => {
    page = new NgSmnUiDocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
