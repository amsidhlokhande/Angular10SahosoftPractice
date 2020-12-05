import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestData implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let bookdetails: any[] = [ ];

    for(let i=0; i<=100000; i++){
      bookdetails.push({ id: i, name: 'Java Book'+ i, author: 'Amsidh Lokhande'+i });
    }

    return { 'book': bookdetails };
  }
}
