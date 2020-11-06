import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.animalService
        .get(Number(id))
        .subscribe((animal) => (this.model = animal));
    } else {
      this.model = {
        name: '',
        comment: '',
        species: '',
        veterinarian: '',
      };
    }
  }

  onSubmit(formGroup: FormGroup): void {
    if (formGroup.valid) {
      if (this.model.id) {
        this.animalService.update(this.model).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      } else {
        this.animalService.create(this.model).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      }
    }
  }
}
