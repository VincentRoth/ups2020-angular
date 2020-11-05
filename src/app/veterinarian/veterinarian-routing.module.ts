import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetRootComponent } from './vet-root/vet-root.component';

const routes: Routes = [
  {
    path: '',
    component: VetRootComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: ':id', component: VetDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinarianRoutingModule {}
