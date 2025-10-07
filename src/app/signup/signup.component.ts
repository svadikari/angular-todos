import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!: FormGroup;
  errordetails: string =''
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group ({
      fname: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{0,15}$')]),
      lname: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{0,15}$')]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_$@]{5,15}$')])
    })
  }

  signUp() {
    if(this.signupForm.valid) {
      this.errordetails = this.userService.singUp(this.signupForm.value)
      if(!this.errordetails) {
        this.router.navigate(['login'])
      }
    }
  }
  
}
