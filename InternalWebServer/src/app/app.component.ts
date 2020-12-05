import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookClientService } from './book-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Angular Internal Web Server';
 
   books: Book[] = [];

  constructor(private bookService: BookClientService) {
    this.loadBooks();
   }
  ngOnInit(): void {

  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }



}
