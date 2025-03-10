import { Component, AfterViewInit, ElementRef  } from '@angular/core';
import { MapService } from '../../services/map.service';
import { IpService } from '../../services/ip.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadMap();
    }, 100);
  }

  private loadMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // 🔥 Criar um ícone personalizado SEM sombra
    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', 
      iconSize: [25, 41], 
      iconAnchor: [12, 41]
    });

    L.marker([51.505, -0.09], { icon: customIcon }).addTo(this.map)
      .bindPopup('Você está aqui!')
      .openPopup();
  }
}
