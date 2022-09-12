/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonitPatientRiskComponent } from './monit-patient-risk.component';

describe('MonitPatientRiskComponent', () => {
  let component: MonitPatientRiskComponent;
  let fixture: ComponentFixture<MonitPatientRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitPatientRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitPatientRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
