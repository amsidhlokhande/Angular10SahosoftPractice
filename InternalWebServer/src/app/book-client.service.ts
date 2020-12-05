import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookClientService {
  getBookUrl: string = '/api/book';

  constructor(private httpClient: HttpClient) { 
    console.log('BookClientService loaded');
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.getBookUrl);
  }
}

