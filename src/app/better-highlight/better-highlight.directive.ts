// this is a better way to create a custom directive that accounts for situations where the 
// element may not have yet been rendered by the DOM by using the renderer
// make sure to import inside app.module!

import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', ); 
    // arguments include:
    // the element we want to change the style of; this.elRef.nativeElement grabs the element that the directive was placed on
    // the style property we want to change
    // the value we want for the style property
    // - flag (this one is optional)
  }
}
