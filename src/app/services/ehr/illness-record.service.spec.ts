/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IllnessRecordService } from './illness-record.service';

describe('Service: IllnessRecord', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IllnessRecordService]
    });
  });

  it('should ...', inject([IllnessRecordService], (service: IllnessRecordService) => {
    expect(service).toBeTruthy();
  }));
});
