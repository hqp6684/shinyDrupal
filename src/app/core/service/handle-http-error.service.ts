import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class HandleHttpErrorService {

  constructor() { }
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
