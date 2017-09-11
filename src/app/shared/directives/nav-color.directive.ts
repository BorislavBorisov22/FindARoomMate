import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavColor]'
})
export class NavColorDirective {

  constructor(private elementRef: ElementRef) {
  }

   @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.background = '-moz-linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
    this.elementRef.nativeElement.style.background = '-webkit-linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
    this.elementRef.nativeElement.style.background = 'linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
    this.elementRef.nativeElement.style.filter =
      'unquote("progid:DXImageTransform.Microsoft.gradient( startColorstr="#b3000000", endColorstr="#b3000000",GradientType=0 )")';
   }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.background = '';
   }

}
