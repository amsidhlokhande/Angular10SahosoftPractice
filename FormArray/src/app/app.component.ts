import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FormArray';
  

  constructor(private formBuilder:FormBuilder){
   

  }
  ngOnInit(): void {
   const myFormArray= new FormArray([
      new FormControl('A',[Validators.minLength(2), Validators.maxLength(12)]),
      new FormControl('Lokhande',[Validators.minLength(2), Validators.maxLength(12)]),
    ]);
   //myFormArray.setValue(['Amisdh','Lokhande']);
   myFormArray.patchValue(['Amisdh']);
   myFormArray.reset(['Babasha','Lokhande']);
    console.log(myFormArray.value);
    console.log(myFormArray.status);
    

  }
  

}
