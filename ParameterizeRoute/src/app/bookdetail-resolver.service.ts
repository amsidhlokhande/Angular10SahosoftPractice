import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './services/book';
import { BookService } from './services/book.service';


@Injectable({
  providedIn: 'root'
})
export class BookdetailResolverService implements Resolve<Book>{

  constructor(private bookService: BookService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book | Observable<Book> {
    let id = route.paramMap.get('id');


    console.log('Fetching book details for id ' + id);

    let book!: Book;

    this.bookService.getBookById(parseInt(id != null ? id : '0')).subscribe(
      data => {
        book = data

      });
      
     if(book){
        return book;
     }else{
       console.log('No Book with id '+ id + ' found');
       alert('No Book with id '+ id + ' found');
       this.router.navigate(['/home']);
     }

    return book;

  }
}
