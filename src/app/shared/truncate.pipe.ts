import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, limit = 180): unknown {
    if (text.length > limit) {
      return text.substring(0, limit - 3).concat('...');
    }
    return text;
  }
}
