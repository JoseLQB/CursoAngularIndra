import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {

  nombre: string = 'Charles Falco'
  nombre2: string = ''
  deshabilitarInput: boolean = true;
  logo: any = {
    nombre: 'Angular',
    urlLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  }
  textoAlternativo: string = 'Logo de ' + this.logo.nombre;

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre;
  }

  cambiarNombre(nuevoNombre: string, event: any){ //Event nos da el objeto del evento que ha ocurrido
    console.log(event);
    this.nombre = nuevoNombre;
  }

  cambiarNombreAlt(event: any){
    this.nombre = event.target.value;
  }
  


}
