/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatientRiskComponent } from './patient-risk.component';

describe('PatientRiskComponent', () => {
  let component: PatientRiskComponent;
  let fixture: ComponentFixture<PatientRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
