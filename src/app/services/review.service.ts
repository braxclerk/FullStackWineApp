import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl: string = 'https://localhost:7196/api';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/Reviews`);
  }

  getReviewById(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.baseUrl}/Reviews/${id}`);
  }

  updateReview(review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.baseUrl}/Reviews/${review.id}`, review);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/Reviews`, review);
  }

  deleteReview(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/Reviews/${id}`);
  }
}
