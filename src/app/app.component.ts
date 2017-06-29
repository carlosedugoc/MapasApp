import { Component } from '@angular/core';
import { MapasService} from './services/mapas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 4.711448;
  lng: number = -74.112299;
  zoom: number = 16;

  constructor(private mapasService:MapasService){

  }

  clickMapa( evento ){
    console.log(evento);
    console.log(this.mapasService.marcadores);
  }
}
