import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web API Put Method';
  isStudentSaved: boolean = false;
  studentForm!: FormGroup;
  students!: Observable<Student[]>;
  updateStudentId: string = '';
  student!: Student;
  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'standard': ['', Validators.required]
    });
    this.students = this.studentService.getStudents();
  }

  saveStudent() {
    this.student = this.studentForm.value;
    this.persistStudent(this.student);
  }

  updateStudent(id: number) {
    this.studentService.getStudentById(id).subscribe(student => {
      this.studentForm.patchValue(student);
      this.isStudentSaved = false;
      this.updateStudentId = id + '';
    });

  }


  persistStudent(student: Student) {
    if (this.updateStudentId == '') {
      this.studentService.createNewStudent(student).subscribe(st => {
        this.isStudentSaved = true;
        this.studentForm.reset();
        this.students = this.studentService.getStudents();
        this.updateStudentId = '';

      });
    } else {
      this.studentService.updateStudent(student).subscribe(rollNumber => {
        this.isStudentSaved = true;
        this.studentForm.reset();
        this.students = this.studentService.getStudents();
        this.updateStudentId = '';
      });

    }
  }


  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(student => {
      this.isStudentSaved = false;
      this.studentForm.reset();
      this.students = this.studentService.getStudents();
      this.updateStudentId = '';

    });
  }
}
