import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingInAngular';

  constructor(private router: Router) {
  }

  loadStudent(event: any) {
    if (event.target.value === 'studentdetails') {
      console.log(event.target.value);
      this.router.navigate(['/studentdetails']);
    }
    else if (event.target.value === 'student') {
      console.log(event.target.value);
      this.router.navigate(['/student'])
    }
  }
}
