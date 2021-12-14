import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective implements OnInit{

  @HostBinding('style.color') color: string = "black";
  @HostBinding('style.float') float: string = "";

 @Input('appPowerMode') col: string = "red"; 

  constructor() { }

  ngOnInit(){
    console.log(Math.round(Math.random() * (4-0)))
    console.log(this.color);
  }

  
  @HostListener('input') onChangeColor(){
    const colors: Array<string> = ["red", "yellow", "orange", "green", "blue"];
    const position: Array<string> = ["left", "right"]
    this.color = colors[Math.floor(Math.random()*5)];
    this.float = position[Math.floor(Math.random()*2)];
  }

}
