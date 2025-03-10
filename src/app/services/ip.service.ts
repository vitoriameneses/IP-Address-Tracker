import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private apiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_r2m0XZUnPDFVZm8X5QSPQvSkkmep7&ipAddress=8.8.8.8';
  constructor(private http: HttpClient) { }

  getIpAddress(ip: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${ip}`);
  }
}
