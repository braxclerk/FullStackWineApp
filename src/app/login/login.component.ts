import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
selector: 'app-login',
standalone: true,
imports: [FormsModule],
templateUrl: './login.component.html',
styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;  // Changed from email to username
  password!: string;
  authenticated = false;

  constructor(public auth: AuthService, private router: Router) {}
  

  login() {
    if (this.username != null && this.password != null) {
    this.auth.authenticate(this.username, this.password).subscribe((auth) => {
    if (auth != null) {
    // Save to the local storage
    localStorage.setItem('headerValue', auth.headerValue);
    this.authenticated = true;
    this.router.navigate(['students'])
    }
    });
    }
    }
    }