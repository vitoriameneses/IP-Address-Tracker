import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { IpService } from './services/ip.service';

@Component({
  selector: 'app-root',
  imports: [MapComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ip_input: string = '';

  ip_address: string = '';
  location: string = '';
  timezone: string = '';
  isp: string = '';

  lat: number = 0;
  lng: number = 0;

  title = 'ip-address-tracker';

  constructor(
    private ipService: IpService
  ){}

  trackIP(ip: string) {
    this.ipService.getIpAddress(ip).subscribe((data) => {
      console.log(data);
      this.ip_address = data.ip;
      this.location = `${data.location.city}, ${data.location.region}`;
      this.timezone = data.location.timezone;
      this.isp = data.isp;

      // location infos
      this.lat = data.location.lat;
      this.lng = data.location.lng;
    });
  }
}
