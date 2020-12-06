import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgTemplateAndNgContainer';
  display: boolean = true;
  flag: boolean = false;

  books = [
    { id: 1, name: 'Java' },
    { id: 2, name: '.Net' },
    { id: 3, name: 'ASP' },
    { id: 4, name: 'C++' }
  ];


}
