import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalService } from '../shared/api/animal.service';

import { AnimalDetailResolverService } from './animal-detail-resolver.service';

describe('AnimalDetailResolverService', () => {
  let service: AnimalDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalService],
    });
    service = TestBed.inject(AnimalDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
