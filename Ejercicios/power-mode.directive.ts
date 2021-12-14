import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective implements OnInit{

 // @HostBinding('style.float') position: string = "";
  @HostBinding('style.color') color: string = "black";

/* @Input('appPowerMode') col: string = "red"; */

  constructor() { }

  ngOnInit(){
    console.log(Math.round(Math.random() * (4-0)))
    console.log(this.color);
  }

  
  @HostListener('changeColor') onChangeColor(){
    const colors: Array<string> = ["red", "yellow", "orange", "green", "blue"] 
    this.color = colors[Math.round(Math.random()*5)];
  }

}
