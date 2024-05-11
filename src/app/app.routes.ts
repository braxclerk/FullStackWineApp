import { Routes} from '@angular/router';
import { WineListComponent } from './wine-list/wine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WineComponent } from './wine/wine.component';
import { WineEditComponent } from './wine-edit/wine-edit.component'; // Corrected path
import { LoginComponent } from './login/login.component';
import { AddWineComponent } from './add-wine/add-wine.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';


export const routes: Routes = [
   { path: "wine-list", component: WineListComponent},
   { path: "dashboard", component: DashboardComponent },   
   { path: "wine", component: WineComponent },  
   { path: "wine-edit/:id", component: WineEditComponent },
   { path: 'wine/:id', component: WineComponent },
   { path: "login", component: LoginComponent },
   { path: 'add-wine', component: AddWineComponent },
   { path: "user", component: UserComponent },  
   { path: "user-list", component: UserListComponent }, 
   { path: "**", component: WineListComponent }
];


   