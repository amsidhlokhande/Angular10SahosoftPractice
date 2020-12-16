import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  book!: Book;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    /*     //First Way using snapshot and param
        alert(this.activatedRoute.snapshot.params.id);
        this.bookService.getBookById(parseInt(this.activatedRoute.snapshot.params.id)).subscribe(book => this.book = book);
     */
    /* //Second Way using snapshot and paramMap
    alert(this.activatedRoute.snapshot.paramMap.get('id'));
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id !=null){
      this.bookService.getBookById(parseInt(id)).subscribe(book => this.book = book);
    } */
/*
    //Third way using Observable and params
    this.activatedRoute.params.subscribe(params =>{
      alert(params.id);
      this.bookService.getBookById(parseInt(params.id)).subscribe(book => this.book = book);
    }); */

    //Fourth way using Observable and paramMap
    this.activatedRoute.paramMap.subscribe(params =>{
      alert(params.get('id'));
      let id= params.get('id');
      if(id != null)
      this.bookService.getBookById(parseInt(id)).subscribe(book => this.book = book);
    });

  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
