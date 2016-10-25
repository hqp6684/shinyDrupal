import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-db-config-view',
  templateUrl: './my-db-config-view.component.html',
  styleUrls: ['./my-db-config-view.component.scss']
})
export class MyDbConfigViewComponent implements OnInit {

  dbListViewModes = ['view_list', 'view_comfy'];
  dbListViewMode: 'view_list';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toggleViewMode() {
    this.router.navigate([`./dbConfig/view/${this.dbListViewMode}`]);
    console.log(this.dbListViewMode);
  }

}
