import { NotificationService } from './../../services/notification.service';
import { EditProfileComponent } from './edit-profile.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('UserListComponent', () => {
    let component: EditProfileComponent;
    let router;
    let usersService;
    let fileUploader;
    let notificator;
    let userStorageService;

    describe('ngOnInit tests', () => {
        let getLoggedUserIsCalled = false;
        let mapIsCalled = true;
        let subscribeIsCalled = false;
        let subscribeParam = null;

        beforeEach(() => {
            usersService = {
                getLoggedUserInfo: () => {
                    getLoggedUserIsCalled = true;
                    return {
                        map: () => {
                            mapIsCalled = true;
                            return {
                                subscribe: (param) => {
                                    subscribeParam = param;
                                    subscribeIsCalled = true;
                                }
                            };
                        }
                    };
                }
            };

            component = new EditProfileComponent(router, usersService, fileUploader, notificator, userStorageService);
        });

        afterEach(() => {
            getLoggedUserIsCalled = false;
            mapIsCalled = false;
            subscribeIsCalled = false;
            subscribeParam = false;
        });

        it('expect to call usersService.getLoggedUserInfo once', () => {
            component.ngOnInit();

            expect(getLoggedUserIsCalled).toBeTruthy();
        });

        it('expect to call map once after user info is returned', () => {
            component.ngOnInit();

            expect(mapIsCalled).toBeTruthy();
        });

        it('expect to call subscribe once after user info is returned', () => {
            component.ngOnInit();

            expect(mapIsCalled).toBeTruthy();
        });
    });
});
