import { User } from './../../models/user.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let storageService;
  let notificationService;
  let usersService;

  beforeEach(() => {
    notificationService = {
      showError(msg: string) {
      }
    };

    usersService = {
      rateUser: (user, dislike) => {
        return {
          map: () => {
            return {
              subscribe: (response) => {
              }
            };
          }
        };
      }
    };

    storageService = {
      getLoggedUserUsername: () => {
        return 'someUsername';
      },
      isUserLogged: () => {
        return false;
      }
    };

    component = new UserListComponent(storageService, usersService, notificationService);
  });

  describe('isUserRated tests', () => {
    it('expect to call usersStorageService.getLogggedUserUsername once', () => {
      spyOn(storageService, 'getLoggedUserUsername');
      component.isUserRated(new User());
      expect(storageService.getLoggedUserUsername).toHaveBeenCalledTimes(1);
    });

    it('expect to call usersStorageService.isUserLogged once', () => {
      spyOn(storageService, 'isUserLogged');
      component.isUserRated(new User());
      expect(storageService.isUserLogged).toHaveBeenCalledTimes(1);
    });

    it('expect to return false when usersStorage.isUserLogged returns false', () => {
      const isUserRated = component.isUserRated(new User());
      expect(isUserRated).toBeFalsy();
    });
  });

  describe('rateUser tests', () => {
    it('expect to call this.usersStorage.isUserLogged once', () => {
      spyOn(storageService, 'isUserLogged');
      component.rateUser();
      expect(storageService.isUserLogged).toHaveBeenCalledTimes(1);
    });

    it('expect to call notificators showError method once when user is not logged in', () => {
      spyOn(notificationService, 'showError');
      component.rateUser();
      expect(notificationService.showError).toHaveBeenCalledTimes(1);
    });

    it('expect to call notificators showError method with correct message', () => {
      const expectedMessage = 'You must be logged in order to rate a user!';

      spyOn(notificationService, 'showError');
      component.rateUser();
      expect(notificationService.showError).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
