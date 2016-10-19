import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fixed-top-toolbar',
  templateUrl: './fixed-top-toolbar.component.html',
  styleUrls: ['./fixed-top-toolbar.component.scss']
})
export class FixedTopToolbarComponent implements OnInit, OnChanges {
  _isDarkTheme: boolean = false;
  @Input()
  set isDarkTheme(isDarkTheme: boolean) {
    this._isDarkTheme = isDarkTheme;
  }
  get isDarkTheme() {
    return this._isDarkTheme;
  }
  @Input() leftSideNav: any;

  @Input() title: string;

  @Output() onToggleDarkTheme = new EventEmitter<boolean>();
  ngOnInit() {
  }

  ngOnChanges() { }

  toggleDarkTheme() {
    this._isDarkTheme = !this._isDarkTheme;
    this.onToggleDarkTheme.emit(this._isDarkTheme);
  }

}
