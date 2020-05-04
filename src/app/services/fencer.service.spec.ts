import { TestBed } from '@angular/core/testing';

import { FencerService } from './fencer.service';

describe('FencerService', () => {
  let service: FencerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FencerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
