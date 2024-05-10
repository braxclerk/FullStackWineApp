import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../models/wine';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule,]
})
export class AddWineComponent {
  wine: Wine = new Wine(); // Assuming you have a default constructor to initialize a new Wine object

  constructor(private wineService: WineService, private router: Router, private userService: UserService) {
    
  }

  addWine(): void {
    console.log('Adding wine:', this.wine);
    this.wineService.addWine(this.wine).subscribe({
      next: () => {
        this.router.navigate(['/wine-list']);
      },
      error: (error) => {
        console.error('Failed to add new wine:', error);
      }
    });
  }
  
}
