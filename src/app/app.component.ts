import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ip-address-tracker';
}
