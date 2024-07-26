import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule,],
  template: `
    <div>
      <h1>Peliculas Favoritas!!</h1>
      @if(favorites.length === 0){
        <h2>No tienes peliculas favoritas</h2>
      }@else {
        <div class="container">
          <div class="div-card-videos" *ngFor="let video of favorites">
            <img [src]="video.ImageUrl" class="img-card-video" width="300" height="420" alt="Item Image">
            <h2>{{ video.Title }}</h2>
            <p>{{ video.Description }}</p>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .container {
      padding: 0px 0px 40px 20px;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      justify-content: space-between;
      gap: 30px;
      shadow-box: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }
    .div-card-videos{
      width: 300px;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    h1{
      text-align: center;
    }
    h2{
      text-align: center;
    }

    `]
})
export class FavoritosComponent implements OnInit {
  favorites: any[] = [];

  getFavorites() {
    if (typeof localStorage !== 'undefined') {
      const listFavorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
      this.favorites = listFavorites;
    } else {
      console.warn('localStorage is not available');
    }
  }

  ngOnInit(): void {
    this.getFavorites();
    console.log("Favoritos", this.favorites);
  }
}
