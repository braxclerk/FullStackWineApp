import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wine-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wine-detail.component.html',
  styleUrl: './wine-detail.component.css'
})
export class WineDetailComponent {
wine: any;
editWine() {
throw new Error('Method not implemented.');
}
goBack() {
throw new Error('Method not implemented.');
}

}
