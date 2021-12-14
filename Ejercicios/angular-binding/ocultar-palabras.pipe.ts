import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {
  transform(value: string, palabra: Array<string>): string {
    console.log(palabra)
    let arr = value.split(' ');
    for (let i = 0; i < arr.length; i++) {
      palabra.forEach(e => {
        if(arr[i] == e){
          arr[i] = "*".repeat(arr[i].length);
        }
      });
    }
    return arr.join(" ");
  }

}
