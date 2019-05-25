import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: {
    username: string;
  };

  //local boolean copy
  private isLoggedIn = false;

  //for html
  private isLoggedIn$;

  constructor(private auth: AuthService, private router: Router, private session: SessionService) {
    this.user = this.session.getSession();
  }

  ngOnInit() {
    //to html
    this.isLoggedIn$ = this.session.isLoggedInAsAObservable();

    //to local copy
    this.isLoggedIn$.subscribe(
      (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      },
      (error) => {
        console.log(error);
      },
    );
  }

  isLoggedInValue() {
    return this.isLoggedIn;
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnDestroy() {
    this.isLoggedIn$.unsubscribe();
  }
}
