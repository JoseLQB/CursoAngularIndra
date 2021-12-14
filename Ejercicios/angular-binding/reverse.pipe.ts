import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let palabraInversa: string = "";
    console.log(value);
    for (var e = value.length - 1; e >= 0; e--) {
      palabraInversa += value.charAt(e);
    }
    return palabraInversa;
  }
}

//revertir un string
