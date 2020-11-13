import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalService;
  let httpTestCtlr: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalService);
    httpTestCtlr = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query one animal', () => {
    service.get(1).subscribe((animal) => {
      expect(animal.name).toEqual('test');
    });

    const requestCtrl = httpTestCtlr.expectOne('/api/animals/1');
    expect(requestCtrl.request.method).toEqual('GET');

    requestCtrl.flush({ id: 1, name: 'test' });

    httpTestCtlr.verify();
  });
});
