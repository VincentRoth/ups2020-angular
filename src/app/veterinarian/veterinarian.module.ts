import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';

@NgModule({
  declarations: [
    VetRootComponent,
    VetDetailComponent,
    VetListComponent,
    VetFormComponent,
  ],
  imports: [CommonModule, VeterinarianRoutingModule, ReactiveFormsModule],
})
export class VeterinarianModule {}
