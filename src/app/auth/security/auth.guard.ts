import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStorage } from '../services/user.storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userStorage: UserStorage, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      this.userStorage.getSession().subscribe((session) => {
        if (session && session.token && session.id) {
          resolve(true);
        } else {
          this.router.navigate(['/auth/login']);
          resolve(false);
        }
      });
    });
  }
}
