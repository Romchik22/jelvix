import { JelvixTestTaskPage } from './app.po';

describe('jelvix-test-task App', () => {
  let page: JelvixTestTaskPage;

  beforeEach(() => {
    page = new JelvixTestTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
