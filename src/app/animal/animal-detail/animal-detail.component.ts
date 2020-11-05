import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnDestroy, OnInit {
  animal: Animal;
  private subscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = Number(paramMap.get('id'));

      this.animalService.get(id).subscribe((animal) => {
        this.animal = animal;
      });
    });
  }
}
