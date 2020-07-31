import { Component, OnInit } from '@angular/core';
import {
  style,
  state,
  animate,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-10%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });
  recoverPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
  });
  showError = false;
  signInError = '';
  signUpError = '';
  recoverPasswordError = '';
  showSignIn = true;
  showSignUp = false;
  showRecoverPassword = false;
  hideLoginPassword = true;
  hideSignupPassword = true;
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

  siginIn() {
    this.showError = false;
    if (this.signInForm.valid) {
      this.appService.setLoggedIn(this.signInForm.value.username);
      this.router.navigateByUrl('/home');
    } else {
      this.showError = true;
      this.signInError = 'Please enter valid email address and password.';
    }
  }

  signUp() {
    this.showError = false;
    if (this.signUpForm.valid) {
      this.appService.setLoggedIn(this.signUpForm.value.username);
      this.router.navigateByUrl('/post-signup');
    } else {
      this.showError = true;
      this.signUpError = 'Please enter all the fields.';
    }
  }

  recoverYourPassword() {
    this.showError = false;
    if (this.recoverPasswordForm.valid) {
      this.displaySignIn();
    } else {
      this.showError = true;
      this.recoverPasswordError = 'Please enter valid email address.';
    }
  }

  displaySignUp() {
    this.showError = false;
    this.showSignIn = false;
    this.showRecoverPassword = false;
    this.showSignUp = true;
  }

  displaySignIn() {
    this.showError = false;
    this.showRecoverPassword = false;
    this.showSignUp = false;
    this.showSignIn = true;
  }

  displayRecoverPassword() {
    this.showError = false;
    this.showSignUp = false;
    this.showSignIn = false;
    this.showRecoverPassword = true;
  }
}
