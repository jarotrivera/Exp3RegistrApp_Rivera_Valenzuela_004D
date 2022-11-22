import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('prueba num 1', () => {

    page.navigateTo();
    expect(page.getTextTitle()).toContain('Estudiante');
  });

  
});
