/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurveillanceService } from './surveillance.service';

describe('Service: Surveillance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveillanceService]
    });
  });

  it('should ...', inject([SurveillanceService], (service: SurveillanceService) => {
    expect(service).toBeTruthy();
  }));
});
