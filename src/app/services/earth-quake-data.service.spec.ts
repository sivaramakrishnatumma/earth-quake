import { TestBed } from '@angular/core/testing';

import { EarthQuakeDataService } from './earth-quake-data.service';

describe('EarthQuakeDataService', () => {
  let service: EarthQuakeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarthQuakeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
