import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.transform('uppercase');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.transform(null);
  }

  private transform(textTransform: string): void {
    this.el.nativeElement.style.textTransform = textTransform;
  }
}
