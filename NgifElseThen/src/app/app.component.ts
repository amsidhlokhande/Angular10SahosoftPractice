import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'NgifElseThen';
  checkNgIf:boolean=false;

  checkValue(checkNgIf:boolean){
    this.checkNgIf = checkNgIf;
  }
}
