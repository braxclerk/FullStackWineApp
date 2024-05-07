import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../models/wine';
import { WineComponent } from '../wine/wine.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
  standalone: true,
  imports: [WineComponent, CommonModule] // Ensure you import WineComponent if it's standalone
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineService: WineService, private router: Router) {}

  ngOnInit(): void {
    this.loadWines();
  }

  loadWines(): void {
    this.wineService.getWines().subscribe(wines => this.wines = wines);
  }

handleDelete(id: number | undefined): void {
  if (!id) {
    console.error("Attempted to delete a wine with undefined ID.");
    return;
  }
  
  this.wineService.deleteWine(id).subscribe({
    next: () => (this.wines = this.wines.filter(wine => wine.id !== id), console.log('Wine successfully deleted')),
    error: error => console.error('Failed to delete wine:', error)
  });
}
  handleEdit(id: number | undefined): void {
    if (id !== undefined) {  // Ensure id is defined before navigating
      this.router.navigate(['/edit-wine', id.toString()]); // Convert to string for safe navigation
    } else {
      console.error("Attempted to edit a wine with undefined ID.");
    }
  }
  
}
