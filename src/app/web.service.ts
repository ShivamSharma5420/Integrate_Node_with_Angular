import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Book } from './Book';
import { Observable, throwError } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }


  getUrl = 'http://localhost:3000/books/getBooks';
  postUrl = 'http://localhost:3000/books/addBook';
  deleteUrl = 'http://localhost:3000/books/deleteBook?book_id=';
  putUrl = 'http://localhost:3000/books/updateBook';
  checkUserUrl = 'http://localhost:3000/checkUser'
  registerUserUrl = 'http://localhost:3000/registerUser';
  logOutUrl = "http://localhost:3000/logOut"

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl, { withCredentials: true });
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.postUrl, book, { withCredentials: true });
  }

  deleteBook(id: any) {
    return this.http.delete(this.deleteUrl + id, { withCredentials: true });
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.putUrl, book, { withCredentials: true });
  }

  checkUser(user: any): Observable<any> {
    return this.http.post<any>(this.checkUserUrl, user, { withCredentials: true });
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.registerUserUrl, user, { withCredentials: true }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        return throwError('Something went wrong :' + error.message);
      }));
  }


  logOut(): Observable<any> {
    return this.http.get<any>(this.logOutUrl, { withCredentials: true });
  }

  /* getPosts() {
     // pack in "pipe()"
     return this.http.get(this.url).pipe(
       // eg. "map" without a dot before
       map(data => {
         return data;
       }),
       // "catchError" instead "catch"
       catchError(error => {
         return Observable.throw('Something went wrong ;)');
       })
     );
   }*/

}
