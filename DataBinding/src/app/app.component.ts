import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding Example';

  //Attribute Binding Variables
  attributeBorderValue: number = 1;
  attributeColspanValue: number = 3;


  //ngStyle 
  backgroudColor: string = 'green';

  // Event Binding
  clickedMe(event: any) {
    alert('Hello ' + event.target.value + ' you clicked me!');
  }


  //Two way Data Binding
  //First Way without ngModel
  myInputValue: string = '';
  changeInputValue(event:any){
    this.myInputValue = event.target.value;
    console.log(this.myInputValue);
  }

  //Second way with mgModel
   studentName:string='';

}

