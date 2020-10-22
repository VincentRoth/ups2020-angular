import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './uppercase.directive';
import { TruncatePipe } from './truncate.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './time.interceptor';

@NgModule({
  declarations: [UppercaseDirective, TruncatePipe],
  imports: [CommonModule],
  exports: [UppercaseDirective, TruncatePipe],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
