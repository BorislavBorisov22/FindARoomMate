import { element, browser, by } from 'protractor';
import { AppPage } from './app.po';

describe('find-a-room-mate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct message', () => {
    page.navigateToHome();
    expect(page.getParagraphText()).toEqual('Our Goals');
  });

  it('should open offers page when clicked offer button', () => {
    page.navigateToHome();
    page.clickOffersBtn();
    expect(browser.getCurrentUrl()).toContain('/offers/all');
  });

  it('should navigate to sign in page when user registered successfully', () => {
    page.navigateToHome();
    page.register().then(() => {
        setTimeout(function () {
          expect(browser.getCurrentUrl()).toContain('/auth/login');
        }, 2000);
      });
  });

  it('should navigate to home page when user logged in successfully', () => {
    page.navigateToHome();
    page.registerbeforeLogin().then(() => {
        setTimeout(function () {
          page.login().then(() => {
            setTimeout(function () {
              expect(browser.getCurrentUrl()).toContain('/home');
            }, 2000);
          });
        }, 2000);
      });
  });
});
