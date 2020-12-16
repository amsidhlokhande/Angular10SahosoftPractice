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

  allBooks!:Book[];

  constructor() {
    this.allBooks = this.books.concat([
      {
        id: 5,
        title: 'Spring',
        author: 'Maverik',
        price: 543
      }
    ]);
   }


  getBooks(): Observable<Book[]> {
    //return of(this.books);
    return of(this.allBooks);

  }

  getBookById(id: number): Observable<Book> {
    return of(this.books)
      .pipe(
        mergeMap(bks => {
          return bks.filter(book => book.id === id)
        })
      );

  }
}
