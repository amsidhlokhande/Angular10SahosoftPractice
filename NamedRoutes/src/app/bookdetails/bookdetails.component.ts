import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  books!: Observable<Book[]>;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.getBooks();
  }

  getBooks(): Observable<Book[]> {
    return this.bookService.getBooks();
  }

  close() {
    this.router.navigate([{ outlets: { bookList: null } }]);
  }
}
