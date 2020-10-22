import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './uppercase.directive';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [UppercaseDirective, TruncatePipe],
  imports: [CommonModule],
  exports: [UppercaseDirective, TruncatePipe],
})
export class SharedModule {}
