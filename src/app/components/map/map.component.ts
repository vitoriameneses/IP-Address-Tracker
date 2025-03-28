import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { MapService } from '../../services/map.service';
import { IpService } from '../../services/ip.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit, OnChanges {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  private map!: L.Map;
  private marker!: L.Marker;

  @Input() lat: number = 0;
  @Input() lng: number = 0;

  constructor(private ipService: IpService){}

  ngAfterViewInit(): void {
    if (this.mapContainer?.nativeElement) {
      this.loadMap();
    } else {
      console.error('mapContainer ainda está undefined!');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map && changes['lat'] || changes['lng']) {
      this.updateMarker();
    }
  }
  
  private loadMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([this.lat, this.lng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/icon-location.svg',
      iconSize: [32, 40],
      iconAnchor: [12, 41]
    });

    this.marker = L.marker([this.lat, this.lng], { icon: customIcon }).addTo(this.map)
      .openPopup();

    this.map.removeControl(this.map.zoomControl);
    /*this.map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/icon-location.svg',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [32, 40],
      iconAnchor: [12, 41]
    });

    L.marker([51.505, -0.09], { icon: customIcon }).addTo(this.map)
      .openPopup();

    this.map.removeControl(this.map.zoomControl);*/
  }

  private updateMarker(): void {
    if (this.marker) {
      this.marker.setLatLng([this.lat, this.lng]);
      this.map.setView([this.lat, this.lng], 13);
    }
  }
}
