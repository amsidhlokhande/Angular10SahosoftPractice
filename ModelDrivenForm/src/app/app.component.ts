import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
        firstName: new FormControl(),
        lastName: new FormControl(),
        emailId: new FormControl(),
        password: new FormControl()
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
