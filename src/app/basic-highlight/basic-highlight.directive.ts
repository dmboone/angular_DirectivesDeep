// File that shows how to create a custom directive
// make sure to import inside app.module!

import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' // must have a selector; typically use camel case
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){ // element ref gives us access to the element that the directive is placed on

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}