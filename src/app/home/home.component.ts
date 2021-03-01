import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { WebService } from '../web.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "shivam";
  //test = ['test1', 'test2'];

  flag = false;         //setting it to true if we get the data

  books: any[] = [];
  constructor(protected webServ: WebService, private formBuilder: FormBuilder) {


  }



  ngOnInit() {


    /*() => { console.log("completed"); }*/




  }


  form = this.formBuilder.group({
    book_id: ['', [Validators.required]],
    book_name: ['', [Validators.required]],  //first element in the array is the default value and second is the validator or a list of validators

    author_name: ['', [Validators.required]],
    publish_date: ['', [Validators.required]],
    genre: ['', [Validators.required]],
  });


  putForm = this.formBuilder.group({
    book_id: ['', [Validators.required]],
    book_name: ['', [Validators.required]],  //first element in the array is the default value and second is the validator or a list of validators

    author_name: ['', [Validators.required]],
    publish_date: ['', [Validators.required]],
    genre: ['', [Validators.required]],
  });



  clickToGetBooks() {
    this.webServ.getBooks().
      subscribe((data) => { this.books = data; console.log("Books Loaded "); this.flag = true; },
        (error) => { console.log(error.message); },
      );

  }

  clickToPostBook() {

    /*let book = {
      book_id: this.form.controls['book_id'].value,
      book_name: this.form.controls['book_name'].value,
      author_name: this.form.controls['author_name'].value,
      publish_date: this.form.controls['publish_date'].value,
      genre: this.form.controls['genre'].value
    }*/

    this.webServ.postBook(this.form.value).subscribe((data) => { console.log(JSON.parse(JSON.stringify(data)).message); alert(JSON.parse(JSON.stringify(data)).message) },
      (error) => console.log(error),
      () => console.log("post request completed"));

  }

  bookId: string = '';
  deleteBookById() {
    this.webServ.deleteBook(this.bookId).subscribe((data) => console.log(data),
      (error) => console.log(error));
  }

  clickToUpdateBook() {
    this.webServ.updateBook(this.putForm.value).subscribe((data) => { console.log(JSON.parse(JSON.stringify(data)).message); alert(JSON.parse(JSON.stringify(data)).message) },
      (error) => console.log(error),
      () => console.log("update request completed"));

  }




  logout() {
    this.webServ.logOut().subscribe((data) => { console.log(data.message); alert(data.message) },
      (error) => { console.log(error) })
  }


}
