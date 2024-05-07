import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router'; // Only RouterModule should be here
import { WineListComponent } from './wine-list/wine-list.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { WineComponent } from './wine/wine.component';
import { WineEditComponent } from './wine-edit/wine-edit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    WineEditComponent,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    WineListComponent,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    WineComponent,

  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WINEAPP';
}
