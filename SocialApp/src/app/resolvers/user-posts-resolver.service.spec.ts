import { TestBed } from '@angular/core/testing';

import { UserPostsResolverService } from './user-posts-resolver.service';

describe('UserPostsResolverService', () => {
  let service: UserPostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
