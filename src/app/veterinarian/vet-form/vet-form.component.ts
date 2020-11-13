import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vetService: VeterinarianService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe({
        next: (vet) => {
          this.initForm(vet);
        },
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const model: Veterinarian = {
      ...this.vetFormGroup.value,
    };
    if (id) {
      model.id = Number(id);
      this.vetService.update(model).subscribe(() => {
        this.router.navigate(['/veterinarians']);
      });
    } else {
      this.vetService.create(model).subscribe(() => {
        this.router.navigate(['/veterinarians']);
      });
    }
  }

  private initForm(model?: Veterinarian): void {
    this.vetFormGroup = new FormGroup({
      // model?.firstName équivalent à model && model.firstName
      firstName: new FormControl(model?.firstName, Validators.required),
      lastName: new FormControl(model && model.lastName, Validators.required),
    });
  }
}
