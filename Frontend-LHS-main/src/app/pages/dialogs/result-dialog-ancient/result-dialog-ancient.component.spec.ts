/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultDialogAncientComponent } from './result-dialog-ancient.component';

describe('ResultDialogAncientComponent', () => {
  let component: ResultDialogAncientComponent;
  let fixture: ComponentFixture<ResultDialogAncientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDialogAncientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDialogAncientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
