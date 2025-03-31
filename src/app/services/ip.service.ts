import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private baseUrl = 'https://geo.ipify.org/api/v2/country,city';


  constructor(private http: HttpClient) { }

  getIpAddress(ip: string): Observable<any> {
    const url = `${this.baseUrl}?apiKey=${environment.ipApiKey}&ipAddress=${ip}`;
    return this.http.get(url);
  }
}
