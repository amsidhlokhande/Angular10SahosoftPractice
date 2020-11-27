import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgFor Grouping Elements of List';
  countries:any[]=[
    {
      name:"India",
      people:[{
        name:"Amsidh",
      },
      {
        name:"Shirashel",
      },
      {
        name:"Sanjay",
      }]
    },
    {
      name:"UK",
      people:[{
        name:"Jhon",
      },
      {
        name:"Emily",
      },
      {
        name:"George",
      },
      {
        name:"Mikhel",
      }]
    }
  ];

}
