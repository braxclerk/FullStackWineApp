import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../models/wine';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-wine-edit',
  templateUrl: './wine-edit.component.html',
  styleUrls: ['./wine-edit.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatOption]
})
export class WineEditComponent implements OnInit {
  //TWO WAY DATA BINDING: initalizes wine object, used to store data that will be edits.
  wine: Wine = { id: undefined , name: '', color: '', taste: 0, country: '', description: '', age: 0, userId: 0 };
  wineForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  users: User[] = [];

  constructor(
    private wineService: WineService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.wineForm = this.fb.group({
      id: [{value: '', disabled: true}],
      name: ['', Validators.required],
      color: ['', Validators.required],
      taste: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      country: ['', Validators.required],
      description: [''],
      age: [0, Validators.required],
      userId: [null, Validators.required]
    });


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const wineId = params['id'];
      if (wineId) {
        this.wineService.getWineById(wineId).subscribe(wine => {
          this.wine = wine;
        });
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: users => this.users = users,
    });
  }


  saveWine(): void {
    if (this.wineForm.valid) {
      this.isLoading = true;
      const updatedWine = {...this.wine, ...this.wineForm.value}; // Combines initial wine with updated values
      this.wineService.updateWine(updatedWine).subscribe({
        next: () => {
          this.router.navigate(['/wine-list']);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Failed to update wine:', error);
          this.isLoading = false;
        }
      });
    } else {
      console.error('Form is invalid or ID is missing');
    }
  }


}
