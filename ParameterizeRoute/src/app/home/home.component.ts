import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   books!:Observable<Book[]>;

  
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this. books = this.bookService.getBooks();
  }

  
}
