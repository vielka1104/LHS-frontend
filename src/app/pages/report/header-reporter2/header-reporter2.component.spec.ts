/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderReporter2Component } from './header-reporter2.component';

describe('HeaderReporter2Component', () => {
  let component: HeaderReporter2Component;
  let fixture: ComponentFixture<HeaderReporter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReporter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReporter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
