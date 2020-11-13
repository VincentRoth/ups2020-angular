import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
