import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AddNewRowDynamically';
  studentForm: FormGroup;
  numberOfElement: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      students: this.formBuilder.array([this.studentTemplate()])
    });
  }

  studentTemplate() {
    return this.formBuilder.group({
      name:['', [Validators.minLength(2), Validators.maxLength(50), Validators.required]],
      rollNumber: ['', Validators.required],
      standard: ['', [Validators.minLength(2), Validators.maxLength(50), Validators.required]],
      mobileNumber: [''],
    });
  }

  


  addNewStudent() {
    (<FormArray>this.studentForm.controls['students']).push(this.studentTemplate());
  }

  removeStudent(index: number) {
    const control = <FormArray>this.studentForm.controls['students'];
    if (control != null) {
      this.numberOfElement = control.value.length;
    }

    if (this.numberOfElement > 1) {
      control.removeAt(index);
      return true;
    } else {
      alert('One record is mandtory');
      return false;
    }


  }




}
