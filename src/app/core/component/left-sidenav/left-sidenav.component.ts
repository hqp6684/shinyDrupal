import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
