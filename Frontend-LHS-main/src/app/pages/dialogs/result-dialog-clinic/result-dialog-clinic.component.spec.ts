/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultDialogClinicComponent } from './result-dialog-clinic.component';

describe('ResultDialogClinicComponent', () => {
  let component: ResultDialogClinicComponent;
  let fixture: ComponentFixture<ResultDialogClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDialogClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDialogClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
