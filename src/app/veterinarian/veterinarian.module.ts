import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';


@NgModule({
  declarations: [VetRootComponent],
  imports: [
    CommonModule,
    VeterinarianRoutingModule
  ]
})
export class VeterinarianModule { }
