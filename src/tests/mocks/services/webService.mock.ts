
import { Observable, of, throwError } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';


export class WebServiceMock {






    checkUser(user: any): Observable<any> {
        return of({ message: 'Valid User' });
    }


}





