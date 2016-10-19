import { Component } from '@angular/core';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shiny !';
  isDarkTheme: boolean = false;

  constructor() {
  }

  onToggleDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme;
  }
}
