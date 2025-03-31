import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private baseUrl = 'https://geo.ipify.org/api/v2/country,city';


  constructor(private http: HttpClient) { }

  getIpAddress(ip: string): Observable<any> {
    return this.http.get(`/api/get-ip-info?ip=${ip}`);
  }
}
