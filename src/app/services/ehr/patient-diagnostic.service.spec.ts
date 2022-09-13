/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientDiagnosticService } from './patient-diagnostic.service';

describe('Service: PatientDiagnostic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDiagnosticService]
    });
  });

  it('should ...', inject([PatientDiagnosticService], (service: PatientDiagnosticService) => {
    expect(service).toBeTruthy();
  }));
});
