import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books!: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.getBooks();
  }

  getBooks(): Observable<Book[]> {
    return this.bookService.getBooks();
  }

}
