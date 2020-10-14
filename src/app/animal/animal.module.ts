import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [CommonModule],
  exports: [AnimalDetailComponent],
})
export class AnimalModule {}
