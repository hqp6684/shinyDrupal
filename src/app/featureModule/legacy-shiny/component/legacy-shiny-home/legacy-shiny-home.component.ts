import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppConfigService } from '../../../..//core/service/service';
@Component({
  selector: 'app-legacy-shiny-home',
  templateUrl: './legacy-shiny-home.component.html',
  styleUrls: ['./legacy-shiny-home.component.scss']
})
export class LegacyShinyHomeComponent implements OnInit {
  private homeUrl: any;

  constructor(private appConfigService: AppConfigService, private sanitizer: DomSanitizer) {
    this.homeUrl = sanitizer.bypassSecurityTrustResourceUrl(appConfigService.legacyShinyUrl);
  }

  ngOnInit() {
  }

}
