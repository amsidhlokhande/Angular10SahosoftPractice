import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
  title = 'Radio And Checkbox In Template Driven Form';

  registerUser(userForm: NgForm) {
    if (userForm.invalid) {
      return;
    } else {
      console.log(userForm.controls['username'].value);
      console.log(userForm.controls['gender'].value);
      console.log(userForm.controls['isMarried'].value);
      console.log(userForm.controls['isTcAccepted'].value);

    }
  }

  loadDefaultForm() {
    this.user.username = 'Amsidh';
    this.user.gender = 'Male';
    this.user.isMarried = true;
    this.user.isTcAccepted = true;
  }

  resetUserForm(userForm: NgForm) {
    this.user = new User();
    userForm.resetForm({
      isMarried: false
    })

  }

}


class User {
  username: string = '';
  gender: string = '';
  isMarried: boolean = false;
  isTcAccepted: boolean = false;
  constructor() { }
}