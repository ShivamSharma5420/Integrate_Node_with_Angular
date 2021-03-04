import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService implements ErrorHandler {


  constructor(private route: Router) { }

  handleError(error: Error) {
    if (error) {
      console.log(error);

      this.route.navigate(['/error'])
      alert(error.message);

    }
  }
}
