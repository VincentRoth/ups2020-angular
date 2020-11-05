import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalRootComponent } from './animal-root/animal-root.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalRootComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule],
  exports: [],
})
export class AnimalModule {}
