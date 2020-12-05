import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Book } from './book';
import { BookClientService } from './book-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Angular Internal Web Server';

  books: Observable<Book[]>;
  //book:Observable<Book>;
  bookNames: Observable<String[]>;


  constructor(private bookService: BookClientService) {
    this.books = this.loadBooks();
    //this.book = this.getBookByBookId(5999);
    this.bookNames = this.getBookNames();
  }
  ngOnInit(): void {

  }

  loadBooks(): Observable<Book[]> {
    return this.bookService.getBooks();
  }

  getBookByBookId(bookId: number): Observable<Book> {
    return this.bookService.getBookById(bookId);
  }


  getBookNames(): Observable<String[]> {
    return this.bookService.getBooks().pipe(map(books => books.map(book => book.name)));

  }

}
