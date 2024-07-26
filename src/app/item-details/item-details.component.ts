import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../service/movies.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="movieDetails$ | async as movieDetails; else loading" class="container">
      <h1 class="title-details">Detalles de la Película</h1>
      <div class="div-card-videos-container">
        <div class="div-card-videos">
          <img [src]="movieDetails.ImageUrl" class="img-card-video" width="500" height="620" alt="Item Image">
        </div>
        <div class="div-card-details">
          <h2>{{ movieDetails.Title }}</h2>
          <p>{{ movieDetails.Description}}</p>
        </div>
      </div>
    </div>
    <ng-template #loading>
      <p>Loading...</p>
    </ng-template>
  `,
  styles: [`
    .container {
      margin: 0 auto;
      max-width: 1200px;
    }
    .title-details {
      text-align: center;
      margin-bottom: 20px;
    }
    .div-card-videos {
      display: flex;
    }
    .img-card-video {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .div-card-videos-container {
      display: flex;
      padding: 40px 0px 20px 0px;
    }
    .div-card-details {
      margin-left: 20px;
    }
  `]
})
export class ItemDetailsComponent implements OnInit {

  @Input() id?: number;
  movieDetails$: Observable<any> = new Observable();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    if (this.id !== undefined) {
      this.movieDetails$ = this.moviesService.getMovieById(this.id.toString()).pipe(
        tap(movieDetails => {
        })
      );
    }
  }
}
