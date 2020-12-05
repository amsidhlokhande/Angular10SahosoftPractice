import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http Get Method Example';
  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) {
    this.employees = this.fetchAllEmployees();
  }

  fetchAllEmployees(): Observable<Employee[]> {
    return this.employeeService.getAllEmployee();
  }

}
