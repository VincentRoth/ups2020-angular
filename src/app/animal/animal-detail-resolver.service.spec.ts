import { TestBed } from '@angular/core/testing';

import { AnimalDetailResolverService } from './animal-detail-resolver.service';

describe('AnimalDetailResolverService', () => {
  let service: AnimalDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
