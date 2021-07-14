import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective implements AfterViewInit{
  @Input('bgColor') backgroundColor !: string;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.backgroundColor = this.backgroundColor || "#FFF";
  }

}
