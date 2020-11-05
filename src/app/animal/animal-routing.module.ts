import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalRootComponent,
    children: [
      { path: '', component: AnimalListComponent },
      { path: ':id', component: AnimalDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
