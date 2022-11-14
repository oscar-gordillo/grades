import { TestBed } from '@angular/core/testing';

import { GradesDataService } from './grades-data.service';

describe('GradesDataService', () => {
  let service: GradesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
