import { TestBed } from '@angular/core/testing';

import { UsersPostsResolverService } from './users-posts-resolver.service';

describe('UsersPostsResolverService', () => {
  let service: UsersPostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
