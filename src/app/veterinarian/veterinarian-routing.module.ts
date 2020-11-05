import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetRootComponent } from './vet-root/vet-root.component';

const routes: Routes = [
  { path: '', component: VetRootComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinarianRoutingModule {}
