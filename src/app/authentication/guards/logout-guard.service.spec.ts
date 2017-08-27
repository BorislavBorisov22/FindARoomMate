import { TestBed, inject } from '@angular/core/testing';

import { LogoutGuardService } from './logout-guard.service';

describe('LogoutGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutGuardService]
    });
  });

  it('should be created', inject([LogoutGuardService], (service: LogoutGuardService) => {
    expect(service).toBeTruthy();
  }));
});
