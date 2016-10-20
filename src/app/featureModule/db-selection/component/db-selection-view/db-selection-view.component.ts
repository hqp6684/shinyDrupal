import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-selection-view',
  templateUrl: './db-selection-view.component.html',
  styleUrls: ['./db-selection-view.component.scss']
})
export class DbSelectionViewComponent implements OnInit {
  dbListViewMode: string;
  constructor() { }

  ngOnInit() {
  }
  toggleViewMode() {
    console.log(this.dbListViewMode);
  }
}
