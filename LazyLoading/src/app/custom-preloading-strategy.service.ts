import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      return load();
    }else{
      return of(null);
    }
  }
}
