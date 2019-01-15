import { TestBed } from '@angular/core/testing';

import { NewkidService } from './newkid.service';

describe('NewkidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewkidService = TestBed.get(NewkidService);
    expect(service).toBeTruthy();
  });
});
