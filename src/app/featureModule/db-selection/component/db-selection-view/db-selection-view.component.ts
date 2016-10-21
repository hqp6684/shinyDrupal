import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db-selection-view',
  templateUrl: './db-selection-view.component.html',
  styleUrls: ['./db-selection-view.component.scss']
})

export class DbSelectionViewComponent implements OnInit {

  dbListViewModes = ['view_list', 'view_comfy'];
  dbListViewMode: 'view_list';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toggleViewMode() {
    this.router.navigate([`./dbSelection/view/${this.dbListViewMode}`]);
    console.log(this.dbListViewMode);
  }
}
