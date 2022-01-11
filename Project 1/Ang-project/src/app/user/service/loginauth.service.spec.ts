import { TestBed } from '@angular/core/testing';

import { LoginauthService } from './loginauth.service';

describe('LoginauthService', () => {
  let service: LoginauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
