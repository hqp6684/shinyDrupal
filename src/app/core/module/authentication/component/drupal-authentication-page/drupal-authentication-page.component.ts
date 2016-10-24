import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppConfigService } from '../../../../service/service';



@Component({
  selector: 'app-drupal-authentication-page',
  templateUrl: './drupal-authentication-page.component.html',
  styleUrls: ['./drupal-authentication-page.component.scss']
})
export class DrupalAuthenticationPageComponent implements OnInit {

  private drupalAuthenticationUrl: any;
  constructor(private domSanitizer: DomSanitizer,
    private appConfigService: AppConfigService
  ) {
    this.drupalAuthenticationUrl =
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.appConfigService.drupalAuthenticationPage);
  }

  ngOnInit() {
  }

}
