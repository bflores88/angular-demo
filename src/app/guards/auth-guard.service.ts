import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private session: SessionService, private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.auth.redirectUrl = state.url;

    // //the code below assumes there is a roles table and checks if the user is an admin
    // const roles = this.session.user.roles;
    // if (this.session.isLoggedIn() && roles.includes('admin')) {
    //   return true;
    // }

    return this.session.isLoggedInAsAObservable().pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      }),
      catchError((err) => {
        console.log(err);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
