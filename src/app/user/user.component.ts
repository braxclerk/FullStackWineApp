import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wine } from '../models/wine';
import { WineService } from '../services/wine.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [CommonModule, LoginComponent, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class UserComponent implements OnInit {
  user: User | null = null;
  error: string | null = null;
  users: User[] = []; // This holds the list of users



  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = localStorage.getItem('userId'); // Assuming 'userId' is stored in localStorage upon login
    if (userId) {
      this.userService.getUserById(+userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          this.error = 'Failed to load user data';
          console.error('Error loading user:', err);
        }
      });
    } else {
      this.error = 'No user ID found for fetching data';
    }
  }

  editUser(): void {
    if (this.user) {
      this.router.navigate(['/user-edit', this.user.id]);
    }
  }
  

viewUser(id: number): void {
  this.router.navigate(['/user-list', id]);
}

deleteUser(id: number): void {
  if (confirm('Are you sure you want to delete this user?')) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        // Assuming 'users' is the array holding multiple users
        this.users = this.users.filter(user => user.id !== id);
        alert('User deleted successfully');
      },
      error: (error) => console.error('Failed to delete user:', error)
    });
  }
}

}
