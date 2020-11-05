import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../shared/api/animal';
import { AnimalService } from '../shared/api/animal.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalDetailResolverService implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animal> {
    const id = Number(route.paramMap.get('id'));
    return this.animalService.get(id);
  }
}
