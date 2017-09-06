import { UserStorageService } from './../user-storage.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogoutGuardService {
  constructor(private userStorateService: UserStorageService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isUserLogged = this.userStorateService.isUserLogged();

    if (!isUserLogged) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
