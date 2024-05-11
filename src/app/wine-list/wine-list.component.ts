import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../models/wine';
import { WineComponent } from '../wine/wine.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    //if not authenticated reroutes you to login page
    if (this.wineService.authHeader == null) {
      this.router.navigate(['/login']);
      return;
 
      }
    this.loadWines();
  }

  loadWines(): void {
    this.wineService.getWines().subscribe(wines => this.wines = wines);
  }

  viewWine(id: number | undefined): void {
    this.router.navigate(['/wine', id]);
  }


  
}
