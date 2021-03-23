import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirt]'
})
export class MydirtDirective {

  @HostBinding('style.color') color:string;
  @HostBinding('style.zoom') zoom:string;
 
  constructor(private elementRef:ElementRef) {
  // this.color='white'; 

  
  }
  
  @HostListener('mouseover') onMouseOver(){
    this.color='black';
  this.elementRef.nativeElement.style.zoom = '125%'; 
  
 
  
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.color='blue';
 
  this.elementRef.nativeElement.style.zoom = '100%';

  }

}



