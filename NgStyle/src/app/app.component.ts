import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgStyle Example';
  countries:any[]=[
    {
      country:'India',
      name:'Amsidh' 
    },
    {
      country:'UK',
      name:'Joe' 
    },
    {
      country:'US',
      name:'Antony' 
    },
    {
      country:'India',
      name:'Sanjay' 
    },
    {
      country:'UK',
      name:'George' 
    },
    {
      country:'India',
      name:'Shirashel' 
    },
    {
      country:'US',
      name:'Smith' 
    },

    {
      country:'China',
      name:'ChingChong' 
    },
  ];


  getColor(country:any){
       switch(country){
         case 'India': return 'green';
         case 'UK': return 'red';
         case "US": return 'blue';
         default : return 'grey'
       }
  }
}
