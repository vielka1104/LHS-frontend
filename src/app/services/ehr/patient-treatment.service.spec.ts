/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientTreatmentService } from './patient-treatment.service';

describe('Service: PatientTreatment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientTreatmentService]
    });
  });

  it('should ...', inject([PatientTreatmentService], (service: PatientTreatmentService) => {
    expect(service).toBeTruthy();
  }));
});
