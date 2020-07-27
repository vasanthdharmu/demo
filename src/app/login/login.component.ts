import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  error = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/home');
    } else {
      this.error = 'Please enter username and password.';
    }
  }

  signUp() {
    this.router.navigateByUrl('/signup');
  }
}
