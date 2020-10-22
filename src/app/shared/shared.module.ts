import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [UppercaseDirective],
  imports: [CommonModule],
  exports: [UppercaseDirective],
})
export class SharedModule {}
