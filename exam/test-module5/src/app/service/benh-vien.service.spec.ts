import { TestBed } from '@angular/core/testing';

import { BenhVienService } from './benh-vien.service';

describe('BenhVienService', () => {
  let service: BenhVienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenhVienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
