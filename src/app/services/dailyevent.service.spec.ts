import { TestBed } from '@angular/core/testing';

import { DailyeventService } from './dailyevent.service';

describe('DailyeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyeventService = TestBed.get(DailyeventService);
    expect(service).toBeTruthy();
  });
});
