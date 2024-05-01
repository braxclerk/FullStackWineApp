import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/wine';  // Make sure this path matches where your Wine model is defined
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { WineService } from '../services/wine.service';  // Ensure path is correct

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
  standalone: true,
  imports: [  // Import Angular Material modules or any other components here if used in the template
    CommonModule,  // Import CommonModule if you use *ngFor, *ngIf, etc. in your template
    RouterModule,  // Import RouterModule if you use routerLink in your template
    MatListModule,  // Example: Import MatListModule if you use <mat-list> in your template
    // Add other necessary imports for UI components used within this component
  ]
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineService: WineService) {this.wines = [
  { id: 1, name: 'Chardonnay', color: 'Yellow', country: 'France', description: 'A popular white wine.', age: 5 },
  { id: 2, name: 'Merlot', color: 'Red', country: 'USA', description: 'A smooth red wine.', age: 3 }
  // Add more wine data as needed
]; }
  ngOnInit() {
    console.log("Im here"); 
    this.wineService.getWines().subscribe({
      next: (data) => {
        this.wines = data;
      },
      error: (error) => {
        console.error('Error fetching wines:', error);
      }
    });
  }
}
