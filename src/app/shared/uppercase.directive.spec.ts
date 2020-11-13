import { ElementRef } from '@angular/core';
import { UppercaseDirective } from './uppercase.directive';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const directive = new UppercaseDirective(
      new ElementRef(document.createElement('div'))
    );
    expect(directive).toBeTruthy();
  });
});
