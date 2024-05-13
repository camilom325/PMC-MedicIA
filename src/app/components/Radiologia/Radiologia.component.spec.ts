/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadiologiaComponent } from './Radiologia.component';

describe('RadiologiaComponent', () => {
  let component: RadiologiaComponent;
  let fixture: ComponentFixture<RadiologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
