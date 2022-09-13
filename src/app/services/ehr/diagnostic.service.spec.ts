/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiagnosticService } from './diagnostic.service';

describe('Service: Diagnostic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnosticService]
    });
  });

  it('should ...', inject([DiagnosticService], (service: DiagnosticService) => {
    expect(service).toBeTruthy();
  }));
});
