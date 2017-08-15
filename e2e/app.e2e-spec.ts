import { Angular4BasicToAdvancePage } from './app.po';

describe('angular4-basic-to-advance App', () => {
  let page: Angular4BasicToAdvancePage;

  beforeEach(() => {
    page = new Angular4BasicToAdvancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
