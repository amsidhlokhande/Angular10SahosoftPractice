import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';

  registerForm(regForm: any) {
    debugger;
    var emailId = regForm.controls.emailId.value;
    var firstName = regForm.controls.firstName.value;
    var lastName= regForm.controls.lastName.value;
    console.log(regForm);
  }
}
