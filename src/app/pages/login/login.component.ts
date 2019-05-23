import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth
      .login(this.formData)
      .then(() => {
        console.log('user logged in');
        //redirects to the home page
        this.router.navigate(['/'])
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }
}
