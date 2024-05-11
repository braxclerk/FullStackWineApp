// src/app/services/wine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'

})

export class WineService {
  authHeader: string = "Basic am9obi5kb2U6VmVyeVNlY3JldCE=";
  private baseUrl: string = 'https://localhost:7196/api/Wines';

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader, 'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
    return this.http.get<Wine[]>(this.baseUrl, { headers: headers });
  }

  getWineById(id: number): Observable<Wine> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader, 'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
    return this.http.get<Wine>(`${this.baseUrl}/${id}`, { headers: headers });
  }

  updateWine(wine: Wine): Observable<Wine> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader, 'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
    const url = `${this.baseUrl}/${wine.id}`;
    return this.http.put<Wine>(url, wine, { headers: headers });
  }

  addWine(wine: Wine): Observable<Wine> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader, 'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
    return this.http.post<Wine>(this.baseUrl, wine, { headers: headers });
  }

  deleteWine(id: number): Observable<string> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader, 'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
    return this.http.delete<string>(`${this.baseUrl}/${id}`, { headers: headers, responseType: 'text' as 'json' });
  }
}
