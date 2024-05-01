import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = 'https://localhost:7196/api/Users';
  private adminUrl: string = 'https://localhost:7196/api/Admin';

  constructor(private http: HttpClient) { }

  // General user operations
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  // Admin-specific methods
  // Assuming that the backend uses the same base URL with an admin prefix for admin operations
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.adminUrl}/Users`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.adminUrl}/Users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.adminUrl}/Users/${id}`);
  }

  activateUser(id: number): Observable<User> {
    return this.http.patch<User>(`${this.adminUrl}/ActivateUser/${id}`, {});
  }

  deactivateUser(id: number): Observable<User> {
    return this.http.patch<User>(`${this.adminUrl}/DeactivateUser/${id}`, {});
  }

  // Example method to update user roles, assuming such an endpoint exists
  updateUserRole(userId: number, role: string): Observable<User> {
    return this.http.put<User>(`${this.adminUrl}/Users/${userId}/role`, { role });
  }
}
