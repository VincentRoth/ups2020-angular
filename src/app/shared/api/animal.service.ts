import { Injectable } from '@angular/core';
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
}
