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
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
