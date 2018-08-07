import { TestBed, inject } from '@angular/core/testing';

import { AmaLibService } from './ama-lib.service';

describe('AmaLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmaLibService]
    });
  });

  it('should be created', inject([AmaLibService], (service: AmaLibService) => {
    expect(service).toBeTruthy();
  }));
});
