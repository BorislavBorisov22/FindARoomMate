import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogoutGuardService {
  constructor(private authService: AuthService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isUserLogged = this.authService.isUserLogged();

    if (!isUserLogged) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
