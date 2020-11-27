import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgSwitch';
  changedValue:string = '';

  valueChange(event:any){
    this.changedValue = event.target.value;
  }
}
