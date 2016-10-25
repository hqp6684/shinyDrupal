/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDbConfigViewListComponent } from './my-db-config-view-list.component';

describe('MyDbConfigViewListComponent', () => {
  let component: MyDbConfigViewListComponent;
  let fixture: ComponentFixture<MyDbConfigViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDbConfigViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDbConfigViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
