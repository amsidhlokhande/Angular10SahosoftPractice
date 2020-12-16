import { TestBed } from '@angular/core/testing';

import { BookdetailResolverService } from './bookdetail-resolver.service';

describe('BookdetailResolverService', () => {
  let service: BookdetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookdetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
