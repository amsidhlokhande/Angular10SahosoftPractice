import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {

    return this.httpClient.get<Employee[]>('/api/employee');

  }
}
