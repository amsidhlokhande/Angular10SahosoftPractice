import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgFor TrackBy Example';
  
  students:any[]=[
    {
      id:1,
      name:'Amsidh Lokhande',
      age:37

    },
    {
      id:2,
      name:'Shirashel Lokhande',
      age:40
    },
    {
      id:3,
      name:'Sanjay Lokhande',
      age:35
    },
    {
      id:4,
      name:'Raju Lokhande',
      age:33
    }
  ];

  addMoreStudent(){
    this.students =[
      {
        id:1,
        name:'Amsidh Lokhande',
        age:37
  
      },
      {
        id:2,
        name:'Shirashel Lokhande',
        age:40
      },
      {
        id:3,
        name:'Sanjay Lokhande',
        age:35
      },
      {
        id:4,
        name:'Raju Lokhande',
        age:33
      },
      {
        id:5,
        name:'Aditya Lokhande',
        age:7
      }
    ];
  }

  trackByStudentId(index:number, student:any){
    return student.id;
  }
}
