// this is a better way to create a custom directive that accounts for situations where the 
// element may not have yet been rendered by the DOM by using the Renderer
// always use the Renderer for any DOM manipulations
// make sure to import inside app.module!

import { Directive, OnInit, Renderer2, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    // arguments include:
    // the element we want to change the style of; this.elRef.nativeElement grabs the element that the directive was placed on
    // the style property we want to change
    // the value we want for the style property
    // - flag (this one is optional)
  }

  // added the HostListener decorator to our method named mouseenter
  @HostListener('mouseenter') mouseenter(eventData: Event){ // triggered during mouseenter event; we can grab the eventData but we don't use it in this method
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){ // triggered during mouseleave event
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); 
  }
}
