// make sure you this is added to app.module since you created it!
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){ // created a property called appUnless that we can access from parent
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef); // creates a view (our templateRef) in the view container
    }
    else{
      this.vcRef.clear(); // removes everything from this specific place in the DOM
    }
  }

  // inputs are the template which is a generic type <any> and the view container
  // template is what we are rendering
  // view container is where we are rendering the content
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

   }
}
