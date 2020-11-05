import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';


@NgModule({
  declarations: [VetRootComponent, VetDetailComponent, VetListComponent],
  imports: [
    CommonModule,
    VeterinarianRoutingModule
  ]
})
export class VeterinarianModule { }
