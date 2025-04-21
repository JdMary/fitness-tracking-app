import { TestBed } from '@angular/core/testing';

import { BuddyRequestServiceService } from './buddy-request-service.service';

describe('BuddyRequestServiceService', () => {
  let service: BuddyRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuddyRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
