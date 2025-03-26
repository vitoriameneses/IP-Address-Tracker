import { Component, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
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
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  private map!: L.Map;

  ngAfterViewInit(): void {
    if (this.mapContainer?.nativeElement) {
      this.loadMap();
    } else {
      console.error('mapContainer ainda está undefined!');
    }
  }
  
  private loadMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/icon-location.svg',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });

    L.marker([51.505, -0.09], { icon: customIcon }).addTo(this.map)
      .bindPopup('Você está aqui!')
      .openPopup();
  }
}
