import { TestBed } from '@angular/core/testing';

import { FreeBotLibService } from './free-bot-lib.service';

describe('FreeBotLibService', () => {
  let service: FreeBotLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeBotLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
