/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedicalScheduleStaffComponent } from './medical-schedule-staff.component';

describe('MedicalScheduleStaffComponent', () => {
  let component: MedicalScheduleStaffComponent;
  let fixture: ComponentFixture<MedicalScheduleStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalScheduleStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalScheduleStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
