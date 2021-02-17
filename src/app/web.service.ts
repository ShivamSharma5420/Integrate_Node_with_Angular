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
  deleteUrl = 'http://localhost:3000/books/deleteBook?book_id='
  putUrl = 'http://localhost:3000/books/updateBook'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getUrl);
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.postUrl, book);
  }

  deleteBook(id: any) {
    return this.http.delete(this.deleteUrl + id);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.putUrl, book);
  }


}
