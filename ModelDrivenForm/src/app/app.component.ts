import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    // valueChanges on particular field of the form
    /* this.regForm.get('firstName')?.valueChanges.subscribe(fName=>{
       console.log("Value Change firstName "+ fName);
    }); */

    //valueChanges on form
    /* this.regForm.valueChanges.subscribe((myForm:any)=>{
      console.log("Value Change firstName "+ myForm.firstName);
      console.log("Value Change lastName "+ myForm.lastName);
      console.log("Value Change emailId "+ myForm.emailId);
      console.log("Value Change Password "+ myForm.password);
   }); */

    //stateChanges on particular field of the form
    /* this.regForm.get('emailId')?.statusChanges.subscribe(isValid => {
      console.log("Status Change firstName is valid " + isValid);
    }); */

     //statusChanges on form
    this.regForm.statusChanges.subscribe(isFormValid=>{
      console.log("Status Change is Form Valid  "+ isFormValid);
   });

  }


  registerUser() {
    console.log(this.regForm.get('firstName')?.value);
    console.log(this.regForm.value);
  }

  resetForm() {
    this.regForm.reset({
      emailId: 'amsidhlokhande@gmail.com',
    });
  }

  loadSampleForm() {
    /* this.regForm.setValue({
      firstName: 'Amsidh',
      lastName: 'Lokhande',
      emailId: 'amsidhlokhande@gmail.com'
    }); */  //This wont work as password field is not set. To use setValue we need to set all fields of form.
    this.regForm.patchValue({
      firstName: 'Amsidh',
      lastName: 'Lokhande',
      emailId: 'amsidhlokhande@gmail.com'
    });
  }

}
