import { TestBed } from '@angular/core/testing';

import { APIProductServiceService } from './apiproduct-service.service';

describe('APIProductServiceService', () => {
  let service: APIProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
