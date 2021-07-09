import { TestBed } from '@angular/core/testing';

import { HttprestService } from './httprest.service';

describe('HttprestService', () => {
  let service: HttprestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttprestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
