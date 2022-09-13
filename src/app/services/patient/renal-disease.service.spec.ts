/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RenalDiseaseService } from './renal-disease.service';

describe('Service: RenalDisease', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenalDiseaseService]
    });
  });

  it('should ...', inject([RenalDiseaseService], (service: RenalDiseaseService) => {
    expect(service).toBeTruthy();
  }));
});
