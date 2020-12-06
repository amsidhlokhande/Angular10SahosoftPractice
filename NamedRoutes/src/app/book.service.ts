import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Book } from './book';

const BOOK: Book[] = [
  { id: 1, name: 'Java', author: 'abc', price: 123 },
  { id: 2, name: '.net', author: 'xyz', price: 656 },
  { id: 3, name: 'Sprak', author: 'pqr', price: 856 },
  { id: 4, name: 'C++', author: 'abc', price: 223 },
  { id: 5, name: 'ASP', author: 'lmn', price: 545 },
  { id: 6, name: 'Spring', author: 'pqr', price: 243 }
];

let books: Observable<Book[]> = of(BOOK);

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return books;
  }
}
