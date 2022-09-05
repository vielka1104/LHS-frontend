/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePatientComponent } from './home-patient.component';

describe('HomePatientComponent', () => {
  let component: HomePatientComponent;
  let fixture: ComponentFixture<HomePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
