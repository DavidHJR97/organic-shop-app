import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userSignUp: any = {};
  errors: [];

  constructor(private authService: AuthService) { }

  signUp() {
    this.authService.signUp(this.userSignUp.email, this.userSignUp.password, this.userSignUp.userName)
      .catch((error) => {
        this.errors = error;
      });
  }
}
