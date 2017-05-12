import { GoproduccionesWebPage } from './app.po';

describe('goproducciones-web App', function() {
  let page: GoproduccionesWebPage;

  beforeEach(() => {
    page = new GoproduccionesWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
