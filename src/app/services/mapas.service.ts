import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador';


@Injectable()
export class MapasService {
  marcadores:Marcador[] = [];
  constructor() { 
    let nuevoMarcador:Marcador = {
      lat:4.711448,
      lng:-74.112299,
      titulo:"Portal de la 80",
      draggable:true,
      desc:"titulo"
    }
    this.marcadores.push(nuevoMarcador);
    console.log(this.marcadores);
   }

}
