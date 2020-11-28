import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nested Form Array';
  
  contactNumbersForm: any;

  constructor() {

  }
  ngOnInit(): void {
    this.contactNumbersForm = new FormGroup({
      contactNumbers: new FormArray([
        new FormControl('8108551845'),
        new FormControl('8108551846')
      ])
    });
  }

  showContactNumbers() {
    console.log(this.contactNumbersForm.get('contactNumbers').value);
    console.log(this.contactNumbersForm.value);
  }

  addNumber(){
    this.contactNumbersForm.get('contactNumbers').push(new FormControl());
  }
  
  resetForm(){
    debugger;
    this.contactNumbersForm.get('contactNumbers').patchValue(['8108551845','8108551846']);
  }
}
