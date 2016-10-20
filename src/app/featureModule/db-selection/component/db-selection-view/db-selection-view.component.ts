import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-selection-view',
  templateUrl: './db-selection-view.component.html',
  styleUrls: ['./db-selection-view.component.scss']
})
export class DbSelectionViewComponent implements OnInit {
  dbListViewModes = ['view_list', 'view_comfy'];
  dbListViewMode: 'view_list';
  constructor() { }

  ngOnInit() {
  }
  toggleViewMode() {
    console.log(this.dbListViewMode);
  }
}
