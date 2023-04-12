import { TestBed } from '@angular/core/testing';

import { ServiceFacilityService } from './service-facility.service';

describe('ServiceFacilityService', () => {
  let service: ServiceFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
