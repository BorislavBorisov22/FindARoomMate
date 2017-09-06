import { NotificationService } from './../services/notification.service';
import { SharedModule } from './../shared/shared.module';
import { Http } from '@angular/http';
import { AuthService } from './../services/auth.service';
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
        CookieService,
        HttpRequesterService,
        AuthService,
        NotificationService
      ]
    };
  }
}
