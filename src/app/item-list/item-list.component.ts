import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemDetailsComponent],
  template: `
  <!-- Vista cartas de peliculas iterando -->
      <div class="container"> 
    @for (video of this.videos; track video.MovieID) {
    <div class="div-card-videos" >
      <img [src]="video.ImageUrl" class="img-card-video" width="300" height="420"  alt="Item Image">
      <h2>{{ video.Title }}</h2>
      <p>{{ video.Description }}</p>
      <!-- Boton ver mas detalles que manda id del video -->
      <button (click)="toDetails(video.MovieID)">Ver más...</button>   
         <!-- Boton agrgar a lista negra -->
      <button (click)="addToBlackList()">Eliminar</button>
      <!-- Boton agregar a favoritos -->
      <button (click)="addToFavorites(video.MovieID)">Agregar a Favoritos</button>
      
    </div>
    }
    </div>
  `,
  styles: [`
    .container {
      padding: 0px 20px 40px 20px;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      justify-content: space-between;
      gap: 30px;
      shadow-box: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }

    @media (min-width: 600px) {
      .container {
        width: auto;
        padding: 0px 0px 40px 0px;
      }
    }
    @media (min-width: 1200px) {
      .container {
        width: auto;
        margin: 0 auto;
        padding: 30px 0px 0px 0px;
      }
    }
    .div-card-videos {
      width: 300px;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .img-card-video {
      border-radius: 10px;
    }
    button {
      width: 300px;
      height: 30px;
      background-color: #f5b43c;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 10px;
    }
    button:hover {
      background-color: #f5b46b;
      color: white;
    }
  `]
})
export class ItemListComponent implements OnInit {
  videos: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe((response) => {
      this.videos = response;
    });
  }

  toDetails(videoMovieID: number) {
    // Navigate to the details route with the videoId
    this.router.navigate(['/peliculas/', videoMovieID]);
  }
  // Track by id
  trackById(index: number, video: any): number {
    return video.id;
  }

  addToBlackList(): void {
    // Add to black list
  }

  addToFavorites(videoMovieID: number): void {
    // Obtener la información completa del video
    this.moviesService.getMovieById(videoMovieID.toString()).subscribe((video) => {
      // Obtener los favoritos existentes del local storage
      const favorites = localStorage.getItem('favoritos')
        ? JSON.parse(localStorage.getItem('favoritos') || '[]')
        : [];

      // Comprobar si el video ya está en favoritos
      const isAlreadyFavorite = favorites.some((favorite: any) => favorite.MovieID === video.MovieID);

      if (!isAlreadyFavorite) {
        // Añadir el video completo a favoritos
        favorites.push(video);

        // Actualizar los favoritos en local storage
        localStorage.setItem('favoritos', JSON.stringify(favorites));
        alert('Added to favorites');
      } else {
        alert('Already in favorites');
      }
    });
  }
}
 
  
  


