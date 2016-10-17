import { ShinyDrupalPage } from './app.po';

describe('shiny-drupal App', function() {
  let page: ShinyDrupalPage;

  beforeEach(() => {
    page = new ShinyDrupalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
