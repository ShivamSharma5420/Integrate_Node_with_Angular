import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from './Book';
import { Observable } from 'rxjs';

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
    return this.http.post<any>(this.registerUserUrl, user, { withCredentials: true });
  }

  logOut(): Observable<any> {
    return this.http.get<any>(this.logOutUrl, { withCredentials: true });
  }


}
