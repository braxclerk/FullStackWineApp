import { Routes } from '@angular/router';
import { WineListComponent } from './wine-list/wine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
   { path: "wine-list", component: WineListComponent},
   { path: "dashboard", component: DashboardComponent },   
   { path: "**", component: WineListComponent }
];
