// src/app/services/wine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private baseUrl: string = 'https://localhost:7196/api/Wines'; // Include '/Wines' here

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('https://localhost:7196/api/Wines');
  }

  getWineById(id: number): Observable<Wine> {
    return this.http.get<Wine>(`https://localhost:7196/api/Wines/${id}`);
  }

  updateWine(wine: Wine): Observable<Wine> {
    return this.http.put<Wine>(`https://localhost:7196/api/Wines`, wine);
  }

  addWine(wine: Wine): Observable<Wine> {
    return this.http.post<Wine>('https://localhost:7196/api/Wines', wine);
  }

  deleteWine(id: number): Observable<string> { // Change return type if you expect a string response
    return this.http.delete<string>(`${this.baseUrl}/${id}`, { responseType: 'text' as 'json' });
  }
}