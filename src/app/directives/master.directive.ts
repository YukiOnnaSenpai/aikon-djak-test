import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMaster]'
})
export class MasterDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
