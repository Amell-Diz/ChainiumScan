import { TestBed } from '@angular/core/testing';

import { TxPerDayService } from './tx-per-day.service';

describe('TxPerDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TxPerDayService = TestBed.get(TxPerDayService);
    expect(service).toBeTruthy();
  });
});
