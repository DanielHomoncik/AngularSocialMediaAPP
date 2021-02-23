import { TestBed } from '@angular/core/testing';

import { AlbumsResolverService } from './albums-resolver.service';

describe('AlbumsResolverService', () => {
  let service: AlbumsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
