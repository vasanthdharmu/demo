import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  error = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/post-signup');
    } else {
      this.error = 'Please enter all the fields.';
    }
  }

  signIn() {
    this.router.navigateByUrl('/login');
  }
}
