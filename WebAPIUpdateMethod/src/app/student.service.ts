import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable()
export class StudentService {

  BASE_URL: string = '/api/students';

  constructor(private httpClient: HttpClient) { }


  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.BASE_URL);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.BASE_URL + '/' + id);
  }

  createNewStudent(student: Student): Observable<Student> {
    const httpHeaders: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json');
    const options = { headers: httpHeaders };
    let response = this.httpClient.post<Student>(this.BASE_URL, student, options);
    console.log("createNewStudent");
    this.getStudents().subscribe(students => {
      console.log(JSON.stringify(students));
    });
    return response;
  }

  updateStudent(student: Student): Observable<number> {
    const httpHeaders: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json');
    const options = { headers: httpHeaders };
    let response = this.httpClient.post<number>(this.BASE_URL + '/' + student.id, student, options);
    console.log("updateStudent");
    this.getStudents().subscribe(students => {
      console.log(JSON.stringify(students));
    });
    return response;
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.BASE_URL + '/' + id);
  }


}
