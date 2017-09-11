import { NotificationService } from './../../services/notification.service';
import { LogoutComponent } from './logout.component';
import { User } from './../../models/user.model';

describe('LogoutComponent', () => {
    let userStorageService;
    let notificator;
    let router;

    let component: LogoutComponent;
    beforeEach(() => {
        userStorageService = {
            logoutUser: () => { },
        };

        notificator = {
            showSuccess: (message) => { },
            toastr: {},
        };

        router = {
            navigateByUrl: (url) => { },
        };

        component = new LogoutComponent(userStorageService, router, notificator);
    });

    describe('ngOnInit tests', () => {

        it('expect to call userStorageService.logoutUser once', () => {
            spyOn(userStorageService, 'logoutUser');
            component.ngOnInit();
            expect(userStorageService.LogoutComponent);
        });

        it('expect to call notificationService.showSuccess once', () => {
            spyOn(notificator, 'showSuccess');
            component.ngOnInit();
            expect(notificator.showSuccess).toHaveBeenCalledTimes(1);
        });

        it('expect to call notificationService.showSuccess with correct success message', () => {
            spyOn(notificator, 'showSuccess');
            component.ngOnInit();

            const expectedMessage = 'You have logged out successfully';

            expect(notificator.showSuccess).toHaveBeenCalledWith(expectedMessage);
        });

        it('expect to call router.navigateByUrl once', () => {
            spyOn(router, 'navigateByUrl');
            component.ngOnInit();

            expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        });

        it('expect to call router.navigateByUrl with correct url string', () => {
            spyOn(router, 'navigateByUrl');
            component.ngOnInit();

            const expectedUrl = '/';

            expect(router.navigateByUrl).toHaveBeenCalledWith(expectedUrl);
        });
    });
});
