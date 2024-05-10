import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateUser(user: User) {
    throw new Error('Method not implemented.');
  }
  authHeader: string = "Basic am9obi5kb2U6VmVyeVNlY3JldCE=";
  private userUrl: string = 'https://localhost:7196/api/Users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader });
    return this.http.get<User[]>(this.userUrl, { headers: headers });
  }

  getUserById(id: number): Observable<User> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader });
    return this.http.get<User>(`${this.userUrl}/${id}`, { headers: headers });
  }

  addUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader });
    return this.http.post<User>(this.userUrl, user, { headers: headers });
  }

  deleteUser(id: number): Observable<string> {
    const headers = new HttpHeaders({ 'Authorization': this.authHeader });
    return this.http.delete<string>(`${this.userUrl}/${id}`, { headers: headers, responseType: 'text' as 'json' });
  }
}