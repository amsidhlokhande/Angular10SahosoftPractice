import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgFor Example';
  
  students:any[]=[
    {
      name:'Amsidh Lokhande'
    },
    {
      name:'Raju Lokhande'
    },
    {
      name:'Sanjay Lokhande'
    },
    {
      name:'Shirashel Lokhande'
    }
  ];


}
