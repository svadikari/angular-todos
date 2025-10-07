import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  errordetails:string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_$@]{5,15}$')])
    })
  }
  sumbitLogin() {
    if(this.loginForm.valid) {
      const isLoginSuccessful = this.userService.login(this.loginForm.value);
      if(isLoginSuccessful) {
        console.log('Login Successful!!')
        this.errordetails = '';
        this.router.navigate(['/'])
      }else {
        this.errordetails = 'Invalid credentials!'
      }
      
    }
  }
}
