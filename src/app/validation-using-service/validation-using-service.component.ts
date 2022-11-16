import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-validation-using-service',
  templateUrl: './validation-using-service.component.html',
  styleUrls: ['./validation-using-service.component.css']
})
export class ValidationUsingServiceComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private customValidator: ValidationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

}
