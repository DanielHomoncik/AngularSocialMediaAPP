import { TestBed } from '@angular/core/testing';

import { UserByIdResolverService } from './user-by-id-resolver.service';

describe('UserByIdResolverService', () => {
  let service: UserByIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserByIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
