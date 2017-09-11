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
        let subscribeCallBack = null;

        let setUserInfoIsCalled = false;
        let showSuccessParam = null;

        beforeEach(() => {
            usersService = {
                getLoggedUserInfo: () => {
                    getLoggedUserIsCalled = true;
                    return {
                        map: () => {
                            mapIsCalled = true;
                            return {
                                subscribe: (param) => {
                                    subscribeCallBack = param;
                                    subscribeIsCalled = true;
                                }
                            };
                        }
                    };
                }
            };

            userStorageService = {
                setUserInfo: () => {
                    setUserInfoIsCalled = true;
                },
            };

            notificator = {
                showSuccess: (message) => {
                    showSuccessParam = message;
                }
            };

            component = new EditProfileComponent(router, usersService, fileUploader, notificator, userStorageService);
        });

        afterEach(() => {
            getLoggedUserIsCalled = false;
            mapIsCalled = false;
            subscribeIsCalled = false;
            subscribeCallBack = null;
            setUserInfoIsCalled = false;
            showSuccessParam = null;
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

    describe('onSubmit tests', () => {
        let updateUserInfoIsCalled = false;
        let mapIsCalled = true;
        let subscribeIsCalled = false;
        let subscribeCallBack = null;

        let setUserInfoIsCalled = false;
        let showSuccessParam = null;


        beforeEach(() => {
            usersService = {
                updateUserInfo: () => {
                    updateUserInfoIsCalled = true;
                    return {
                        map: () => {
                            mapIsCalled = true;
                            return {
                                subscribe: (param) => {
                                    subscribeCallBack = param;
                                    subscribeIsCalled = true;
                                }
                            };
                        }
                    };
                }
            };

            userStorageService = {
                setUserInfo: () => {
                    setUserInfoIsCalled = true;
                },
            };

            notificator = {
                showSuccess: (message) => {
                    showSuccessParam = message;
                }
            };

            component = new EditProfileComponent(router, usersService, fileUploader, notificator, userStorageService);
        });

        afterEach(() => {
            updateUserInfoIsCalled = false;
            mapIsCalled = false;
            subscribeIsCalled = false;
            subscribeCallBack = null;
            setUserInfoIsCalled = false;
            showSuccessParam = null;
        });

        it('expect to call usersStorageService.setUserInfo once', () => {
            component.onSubmit();
            subscribeCallBack({ user: 'user' });

            expect(setUserInfoIsCalled).toBeTruthy();
        });

        it('expect to call notificator success with correct message', () => {
            component.onSubmit();
            subscribeCallBack({ user: 'user' });

            const expectedMessage = 'Your profile changes have been saved!';

            expect(showSuccessParam).toEqual(expectedMessage);
        });

        it('expect to call updateUserInfo once', () => {
            component.onSubmit();
            expect(updateUserInfoIsCalled).toBeTruthy();
        });

        it('expect to call map once', () => {
            component.onSubmit();
            expect(mapIsCalled).toBeTruthy();
        });


        it('expect to call subscribe once', () => {
            component.onSubmit();
            expect(mapIsCalled).toBeTruthy();
        });
    });

    describe('ngAfterContentInit tests', () => {
        beforeEach(() => {
            notificator = {
                showInfo: () => { }
            };

            component = new EditProfileComponent(router, usersService, fileUploader, notificator, userStorageService);
        });

        it('expect to call notificationServiceShowInfo with correct message', () => {
            spyOn(notificator, 'showInfo');
            component.ngAfterContentInit();

            const expectedUrl = 'Please fill out all the fields in order to update your profile';

            expect(notificator.showInfo).toHaveBeenCalledWith(expectedUrl);
        });
    });
});
