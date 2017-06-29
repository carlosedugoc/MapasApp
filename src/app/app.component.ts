import { Component } from '@angular/core';
import { MapasService} from './services/mapas.service';
import { Marcador } from './interfaces/marcador';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 4.711448;
  lng: number = -74.112299;
  zoom: number = 16;
  marcadorSel:any = null;

  constructor(private mapasService:MapasService){
    this.mapasService.cargarMarcadores();
  }

  clickMapa( evento ){
    let nuevoMarcador:Marcador = {
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:"Sin titulo",
      draggable:true
    }

    this.mapasService.insertarMarcador(nuevoMarcador);
  }

clickMarcador(marcador:Marcador, i:number){
  console.log(marcador,i);
  this.marcadorSel = marcador;
}

dragEndMarcador(marcador:Marcador,evento){
  marcador.lat = evento.coords.lat;
  marcador.lng = evento.coords.lng;
  this.mapasService.guardarMarcadores();
}

}
