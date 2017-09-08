import { FileUploaderService } from './../services/file-uploader.service';
import { OffersService } from './../services/offers.service';
import { LogoutGuardService } from './../services/guards/logout-guard.service';
import { AuthGuardService } from './../services/guards/auth-guard.service';
import { UserStorageService } from './../services/user-storage.service';
import { NotificationService } from './../services/notification.service';
import { SharedModule } from './../shared/shared.module';
import { Http } from '@angular/http';
import { HttpRequesterService } from './../services/http-requester.service';
import { UsersService } from './../services/users.service';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        UsersService,
        OffersService,
        CookieService,
        HttpRequesterService,
        UserStorageService,
        NotificationService,
        AuthGuardService,
        LogoutGuardService,
        FileUploaderService
      ]
    };
  }
}
