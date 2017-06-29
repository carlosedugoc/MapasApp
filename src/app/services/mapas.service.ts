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
      draggable:true
    }
    this.marcadores.push(nuevoMarcador);
    console.log(this.marcadores);
   }

   insertarMarcador(marcador:Marcador){
     this.marcadores.push(marcador);
     this.guardarMarcadores();
   }

   guardarMarcadores(){
     localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
   }

   cargarMarcadores(){
     if(localStorage.getItem('marcadores')){
       this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
     }else{
       this.marcadores = [];
     }
   }

   borrarMarcador(idx:number){
     this.marcadores.splice(idx,1);
     this.guardarMarcadores();
   }

}
