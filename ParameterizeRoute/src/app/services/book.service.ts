import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      id: 1,
      title: 'Java',
      author: 'Amsidh',
      price: 550
    },
    {
      id: 2,
      title: '.Net',
      author: 'Aditya',
      price: 567
    },
    {
      id: 3,
      title: 'C#',
      author: 'Adithi',
      price: 4545
    },
    {
      id: 4,
      title: 'Python',
      author: 'George',
      price: 7675
    }
  ];

  constructor() { }


  getBooks(): Observable<Book[]> {
    return of(this.books);

  }

  getBookById(id: number): Observable<Book> {
    return this.getBooks()
      .pipe(
        mergeMap(bks => {
          return bks.filter(book => book.id === id)
        })
      );

  }
}
