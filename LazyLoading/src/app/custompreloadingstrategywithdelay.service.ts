import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustompreloadingstrategywithdelayService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    
    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay']
      console.log('preload called on ' + route.path + ' delay is ' + delay);
      return timer(delay).pipe(
        mergeMap(_ => {
          console.log("Loading now " + route.path);
          return load();
        }));
    } else {
      console.log('no preload for the path ' + route.path);
      return of(null);
    }
  }
}
