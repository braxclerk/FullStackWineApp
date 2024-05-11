import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wine } from '../models/wine';
import { WineService } from '../services/wine.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  standalone: true,
  imports: [CommonModule, WineComponent, MatFormFieldModule, MatInputModule, MatButtonModule]
})


export class WineComponent implements OnInit{
  @Input() id!: number | undefined; // ID is now required and should not be undefined.
  @Input() name?: string;
  @Input() color?: string;
  @Input() taste?: number;
  @Input() country?: string;
  @Input() description?: string;
  @Input() age?: number;
  @Input() userId?: number;
  @Input() wine!: Wine;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();



  constructor(
    private wineService: WineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert to number if necessary
      this.wineService.getWineById(id).subscribe({
        next: (wine) => {
          this.wine = wine;
        },
        error: (err) => {
          console.error('Failed to load wine', err);
        }
      });
    });
  }
    

  deleteWine(): void {
    if (this.wine?.id) {
      if (confirm('Are you sure you want to delete this wine?')) {
        this.wineService.deleteWine(this.wine.id).subscribe({
          next: () => {
            console.log('Wine successfully deleted');
            this.router.navigate(['/wine-list']).then(() => {
              window.location.reload();  // Optionally force a reload if needed
            });
          },
          error: (error) => console.error('Failed to delete wine:', error)
        });
      }
    } else {
      console.error('Invalid wine ID for deletion');
    }
  }

  editWine(): void {
    if (this.wine && this.wine.id !== undefined) {
      this.router.navigate(['/wine-edit', this.wine.id]);
    }
  }
}