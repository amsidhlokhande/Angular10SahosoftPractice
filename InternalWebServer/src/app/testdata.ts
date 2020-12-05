import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestData implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let bookdetails: any[] = [
      { id: 1, name: 'Java Book1', author: 'Amsidh Lokhande1' },
      { id: 2, name: 'Java Book2', author: 'Amsidh Lokhande2' },
      { id: 3, name: 'Java Book3', author: 'Amsidh Lokhande3' },
      { id: 4, name: 'Java Book4', author: 'Amsidh Lokhande4' },
      { id: 5, name: 'Java Book5', author: 'Amsidh Lokhande5' },
      { id: 6, name: 'Java Book6', author: 'Amsidh Lokhande6' },
      { id: 7, name: 'Java Book7', author: 'Amsidh Lokhande7' },
      { id: 8, name: 'Java Book8', author: 'Amsidh Lokhande8' },
      { id: 9, name: 'Java Book9', author: 'Amsidh Lokhande9' }
    ];

    return { 'book': bookdetails };
  }
}
