import { TestBed } from '@angular/core/testing';

import { AntiBackdoorGuard } from './anti-backdoor.guard';

describe('AntiBackdoorGuard', () => {
  let guard: AntiBackdoorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AntiBackdoorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
