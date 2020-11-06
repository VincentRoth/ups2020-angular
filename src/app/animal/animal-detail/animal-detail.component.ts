import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnDestroy, OnInit {
  animal: Animal;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(
      (data: { animal: Animal }) => {
        this.animal = data.animal;
      }
    );
  }
}
