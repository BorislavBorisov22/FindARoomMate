import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

const USERNAME_COOKIE_NAME = 'username';
const TOKEN_COOKIE_NAME = 'auth-token';

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService) {
  }

  isUserLogged(): boolean {
    return this.cookieService.check(TOKEN_COOKIE_NAME);
  }

  loginUser(username: string, authToken: string): void {
    this.cookieService.set(USERNAME_COOKIE_NAME, username);
    this.cookieService.set(TOKEN_COOKIE_NAME, authToken);
  }

  logoutUser(): void {
    this.cookieService.delete(USERNAME_COOKIE_NAME);
    this.cookieService.delete(TOKEN_COOKIE_NAME);
  }

  getLoggedUserInfo(): string {
    return this.cookieService.get(USERNAME_COOKIE_NAME);
  }
}
