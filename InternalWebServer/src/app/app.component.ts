import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookClientService } from './book-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Angular Internal Web Server';

  //books: Observable<Book[]>;
  book:Observable<Book>;


  constructor(private bookService: BookClientService) {
    //this.books = this.loadBooks();
    this.book = this.getBookByBookId(5999);
  }
  ngOnInit(): void {

  }

  loadBooks(): Observable<Book[]> {
    return this.bookService.getBooks();
  }

  getBookByBookId(bookId:number):Observable<Book>{
    return this.bookService.getBookById(bookId);
  }


}
