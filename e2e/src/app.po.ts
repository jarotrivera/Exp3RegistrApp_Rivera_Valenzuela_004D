import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  /* getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  } */


  getTextTitle() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
