import { TestBed } from '@angular/core/testing';

import { SportFacilityService } from './sport-facility.service';

describe('SportFacilityService', () => {
  let service: SportFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
