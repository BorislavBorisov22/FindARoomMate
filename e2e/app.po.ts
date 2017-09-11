import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('for-testing')).getText();
  }

  clickOffersBtn() {
    return element(by.id('offers')).click();
  }

  navigateToUsersPage() {
    return browser.get('/users/all');
  }

  register() {
    browser.get('http://localhost:49152/auth/register');
    element(by.name('firstName')).sendKeys('Simona1');
    element(by.name('lastName')).sendKeys('Arsova1');
    element(by.name('username')).sendKeys('simona1');
    element(by.name('email')).sendKeys('simona1@abv.bg');
    element(by.name('password')).sendKeys('123457890aa');
    element(by.name('terms')).click();
    return element(by.buttonText('Sign Me Up')).click();
  }

  logout() {
    browser.get('/auth/logout');
  }

  registerbeforeLogin() {
    browser.get('http://localhost:49152/auth/register');
    element(by.name('firstName')).sendKeys('Simona');
    element(by.name('lastName')).sendKeys('Arsova');
    element(by.name('username')).sendKeys('simona2');
    element(by.name('email')).sendKeys('simona@abv.bg');
    element(by.name('password')).sendKeys('123457890aa');
    element(by.name('terms')).click();
    return element(by.buttonText('Sign Me Up')).click();
  }

  login() {
    browser.get('http://localhost:49152/auth/login');
    element(by.name('firstName')).sendKeys('simona2');
    element(by.name('password')).sendKeys('123457890aa');
    return element(by.buttonText('Sign Me In')).click();
  }
}
