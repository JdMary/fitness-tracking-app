import { TestBed } from '@angular/core/testing';

import { BuddyMatchServiceService } from './buddy-match-service.service';

describe('BuddyMatchServiceService', () => {
  let service: BuddyMatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuddyMatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
