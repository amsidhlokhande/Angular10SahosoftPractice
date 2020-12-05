import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web API Post Method';
  isPersonSaved: boolean = false;
  persons!: Observable<Person[]>;
  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
    this.personForm = this.formBuilder.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'age': ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.persons = this.getAllPerson();
  }

  createPerson() {
    this.isPersonSaved = false;
    let person: Person = this.personForm.value;
    this.savePerson(person);

  }

  getAllPerson(): Observable<Person[]> {
    return this.personService.getAllPersons();
  }

  savePerson(person: Person) {
    this.personService.savePerson(person).subscribe(p => {
      this.isPersonSaved = true;
      this.personForm.reset();
      this.persons = this.getAllPerson();
    });
  }

}
