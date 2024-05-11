import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  async authenticate(username: String, password: String): Promise<Observable<Login>> {
  const headers = new HttpHeaders({'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin': '*' });
  try{
    const rest = await this.http.post<Login>('http://localhost:7196/api/Login', {
      username: username,
      password: password
      },{ headers: headers });
      console.log(rest)
      return rest;
  } catch(_){
    return this.http.post<Login>('http://localhost:7196/api/Login', {})
  }

}
}
