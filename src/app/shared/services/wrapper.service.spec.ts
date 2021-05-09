import { TestBed } from '@angular/core/testing';

import { WrapperService } from './wrapper.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('WrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpClient],
  }));

  it('should be created', () => {
    const service: WrapperService = TestBed.inject(WrapperService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: WrapperService = TestBed.inject(WrapperService);
    service.Api('get', '');
    expect(service.Api).toBeDefined();
  });
});
