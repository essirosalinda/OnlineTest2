import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then(res => {
        this.authService.SendVerificationMail();
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}

