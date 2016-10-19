import {
  Component, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-db-selection',
  templateUrl: './db-selection.component.html',
  styleUrls: ['./db-selection.component.scss'],

})
export class DbSelectionComponent implements OnInit {
  dbListViewMode: string;

  constructor() { }

  ngOnInit() {

  }

  toggleViewMode() {
    console.log(this.dbListViewMode);
  }

}
