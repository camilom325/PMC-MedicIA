/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OncologiaComponent } from './Oncologia.component';

describe('OncologiaComponent', () => {
  let component: OncologiaComponent;
  let fixture: ComponentFixture<OncologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
