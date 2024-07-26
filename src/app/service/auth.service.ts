import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environment.apiUrl; // Reemplaza con la URL de tu API
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  login(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue).pipe(
      tap((response: any) => {
        this.setToken(response.token);
      })
    );
  }

  register(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, formValue);
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private get tokenKey(): string {
    return 'token';
  } 

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }
}
