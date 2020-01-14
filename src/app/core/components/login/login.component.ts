import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userSignIn: any = {};
  errors: [];

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login();
  }

  register() {
    this.router.navigate(['/register']);
  }

  signIn() {
    this.auth.signIn(this.userSignIn.email, this.userSignIn.password)
      .catch((error) => {
        this.errors = error;
      });
  }
}
