import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HandleHttpErrorService } from './handle-http-error.service';
import { Datablock } from '../dataModel/data.model';

@Injectable()
export class DatablockService {
  private apiUrl: string;
  constructor(
    private http: Http,
    private handleHttpService: HandleHttpErrorService
  ) { }


  set url(url: string) {
    this.apiUrl = url;
  }

  getAllDatablock() {
    return this.http.get(this.url)
      .map(this.extractGetAll)
      .catch(this.handleHttpService.handleError);
  }

  extractGetAll(res: Response) {
    let body = res.json();
    let dbs = Array<Datablock>();
    try {

      (<Array<any>>body).map((db) => { dbs.push(new Datablock(db.id, db.name.name)); });

    } catch (e) {
      this.handleHttpService.handleError(e);
    } finally {
      return dbs;
    }
  }
}
