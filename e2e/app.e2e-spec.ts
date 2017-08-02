import { NgVotesPage } from './app.po';

describe('ng-votes App', () => {
  let page: NgVotesPage;

  beforeEach(() => {
    page = new NgVotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
