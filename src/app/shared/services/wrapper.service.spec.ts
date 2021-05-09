import { TestBed } from '@angular/core/testing';

import { WrapperService } from './wrapper.service';

describe('WrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrapperService = TestBed.inject(WrapperService);
    expect(service).toBeTruthy();
  });
});
