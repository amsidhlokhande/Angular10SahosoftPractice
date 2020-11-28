import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Model Driven Form';
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = formBuilder.group(
      {
        firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
        emailId: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')])
      }
    );
  }

  registerUser(userForm: any) {
    var FirstName = userForm.controls.firstName.value;
    var LastName = userForm.controls.lastName.value;
    var EmailID = userForm.controls.emailId.value;
    var Password = userForm.controls.password.value;
    debugger;
    console.log(FirstName);
    console.log(userForm);
  }



}
