import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../module/authentication/service/auth.service';
@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
