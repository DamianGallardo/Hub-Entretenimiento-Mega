import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = environment.apiUrl; // Reemplaza con la URL de tu API
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  getMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movies`);
  }

  getMovieById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movies/${id}`);
  }


}
