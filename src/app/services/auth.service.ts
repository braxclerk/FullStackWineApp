import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Login } from '../models/login';
@Injectable({
providedIn: 'root'
})
export class AuthService {
baseUrl: string = "http://localhost:7196/api";
constructor(private http: HttpClient) {
}
authenticate(username: String, password: String): Observable<Login> {
  return this.http.post<Login>('http://localhost:7196/api/Login', {
  username: username,
  password: password
  });
  }
  }
