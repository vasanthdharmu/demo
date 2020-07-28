import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  error = '';
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.appService.setLoggedIn(this.form.value.username);
      this.router.navigateByUrl('/post-signup');
    } else {
      this.error = 'Please enter all the fields.';
    }
  }

  signIn() {
    this.router.navigateByUrl('/login');
  }
}
