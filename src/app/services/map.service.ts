import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: L.Map | undefined;
  private marker: L.Marker | undefined;

  initializeMap(mapContainer: string, lat: number, lon: number): void {
    this.map = L.map(mapContainer).setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker([lat, lon]).addTo(this.map);
  }

  updateMarker(lat: number, lon: number): void {
    if (this.map && this.marker) {
      this.map.setView([lat, lon], 13);
      this.marker.setLatLng([lat, lon]);
    }
  }
}
