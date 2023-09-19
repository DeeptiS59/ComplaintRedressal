import { TestBed } from '@angular/core/testing';

import { EngineerGuardService } from './engineer-guard.service';

describe('EngineerGuardService', () => {
  let service: EngineerGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineerGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
