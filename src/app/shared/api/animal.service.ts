import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      comment: 'Mon commentaire',
      name: 'Mon animal',
      species: 'Chat',
      veterinarian: 'Mr Dupond',
    };
  }

  getAll(): Animal[] {
    return [
      {
        comment: 'Mon commentaire',
        name: 'Mon animal',
        species: 'Chat',
        veterinarian: 'Mr Dupond',
      },
      {
        comment: 'Mon commentaire',
        name: 'Mon animal 2',
        species: 'Chat',
        veterinarian: 'Mr Dupond',
      },
    ];
  }
}
