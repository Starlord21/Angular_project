import { TestBed } from '@angular/core/testing';

import { BackdoorGuard } from './backdoor.guard';

describe('BackdoorGuard', () => {
  let guard: BackdoorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackdoorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
