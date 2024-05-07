import { Routes, RouterModule } from '@angular/router';
import { WineListComponent } from './wine-list/wine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WineComponent } from './wine/wine.component';
import { WineEditComponent } from './wine-edit/wine-edit.component'; // Corrected path


export const routes: Routes = [
   { path: "wine-list", component: WineListComponent},
   { path: "dashboard", component: DashboardComponent },   
   { path: "wine", component: WineComponent },  
   { path: "wine-edit/:id", component: WineEditComponent },
   { path: "**", component: WineListComponent },
];


   