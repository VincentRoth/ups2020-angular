import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/animal';
import { AnimalService } from 'src/app/shared/api/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animalService.getAll();
  }

  onDeleteItem(animalToDelete: Animal): void {
    const index = this.animals.indexOf(animalToDelete);
    this.animals.splice(index, 1);
  }
}
