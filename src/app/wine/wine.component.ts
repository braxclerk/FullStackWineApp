import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wine } from '../models/wine';


@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  standalone: true,
  imports: [CommonModule, WineComponent]
})
export class WineComponent {
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

  

  onDelete(): void {
    console.log("Delete called for:", this.name);
    this.delete.emit(this.id); // Emitting the ID instead of the name
  }

  onEdit(): void {
    console.log("Edit called for:", this.name);
    this.edit.emit(this.id); // Emitting the ID instead of the name
  }
}
