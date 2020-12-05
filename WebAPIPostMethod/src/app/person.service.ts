import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonService {
  PERSON_URL: string = '/api/persons';
  constructor(private httpClient: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.PERSON_URL);
  }
  savePerson(person: Person): Observable<Person> {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post<Person>(this.PERSON_URL, person, options);
  }
}
