import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DateRangePicker';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @HostListener('click',['$event'])
  showOnClick(){
    console.log('Hello');
  }
}
