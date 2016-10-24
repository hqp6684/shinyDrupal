/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrupalAuthenticationPageComponent } from './drupal-authentication-page.component';

describe('DrupalAuthenticationPageComponent', () => {
  let component: DrupalAuthenticationPageComponent;
  let fixture: ComponentFixture<DrupalAuthenticationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalAuthenticationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalAuthenticationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
