/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VigilantComponent } from './vigilant.component';

describe('VigilantComponent', () => {
  let component: VigilantComponent;
  let fixture: ComponentFixture<VigilantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigilantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
