import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "blue"
  }

}
