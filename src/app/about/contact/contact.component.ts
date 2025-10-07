import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contactForm!: FormGroup;
  errordetails: string =''
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group ({
      name: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{0,15}$')]),
      details: this.fb.control('', [Validators.required, Validators.maxLength(2000)]),
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  submitContact() {
    if(this.contactForm.valid) {
      if(!this.errordetails) {
        this.router.navigate(['/'])
      }
    }
  }
}
