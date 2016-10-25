/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDbConfigViewComfyComponent } from './my-db-config-view-comfy.component';

describe('MyDbConfigViewComfyComponent', () => {
  let component: MyDbConfigViewComfyComponent;
  let fixture: ComponentFixture<MyDbConfigViewComfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDbConfigViewComfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDbConfigViewComfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
