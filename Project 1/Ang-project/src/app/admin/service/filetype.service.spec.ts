import { TestBed } from '@angular/core/testing';

import { FiletypeService } from './filetype.service';

describe('FiletypeService', () => {
  let service: FiletypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiletypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
