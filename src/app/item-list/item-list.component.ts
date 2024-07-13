import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemDetailsComponent],
  template: `
  <!-- Vista cartas de peliculas iterando -->
      <div class="container"> 
    @for (video of videos; track video.id) {
    <div class="div-card-videos" >
      <img [src]="video.img" class="img-card-video" width="300" height="420"  alt="Item Image">
      <h2>{{ video.titulo }}</h2>
      <p>{{ video.description }}</p>
      <!-- Boton ver mas detalles que manda id del video -->
      <button (click)="toDetails(video.id)">Ver más...</button>   
         <!-- Boton agrgar a lista negra -->
      <button (click)="addToBlackList()">Eliminar</button>
      <!-- Boton agregar a favoritos -->
      <button (click)="addToFavorites(video.id)">Agregar a Favoritos</button>
      
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
export class ItemListComponent {
  constructor(private router: Router) { }

  videos = [
    {
      id: 1,
      img: 'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg?region=0%2C0%2C1080%2C1350',
      titulo: 'Encanto',
      description: 'Encanto es una película de animación musical estadounidense de 2021 producida por Walt Disney Animation Studios.'
    },
    {
      id: 2,
      img: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png',
      titulo: 'intensamente 2',
      description: 'Intensamente 2 es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
    },
    {
      id: 3,
      img: 'https://lumiere-a.akamaihd.net/v1/images/08c3f7af558231c022dcccf9eae2cd7c_2867x4096_41eff7c2.png',
      titulo: 'wish',
      description: 'wish es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
    },
    {
      id: 4,
      img: 'https://lumiere-a.akamaihd.net/v1/images/beta_epic_payoff_las_f8ee4a65.jpeg',
      titulo: 'Buzz Lightyear',
      description: 'Buzz Lightyear es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
    },
    {
      id: 5,
      img: 'https://lumiere-a.akamaihd.net/v1/images/elemental_las_c9499ca4.png',
      titulo: 'Elemental',
      description: 'Elemental es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
    }
  ];

  @Input() listFavorites: any[] = [];


  ngOnInit(): void {
    console.log('Item List', this.listFavorites);
  }

  addToFavorites(videoId: number) {
    // Add to favorites
    const video = this.videos.find(v => v.id === videoId);
    if (video) {
      this.listFavorites.push(video);
      localStorage.setItem('favoritos', JSON.stringify(this.listFavorites));
      alert('Added to favorites');
      console.log('Item List', this.listFavorites);
    }
  }

  addToBlackList() {
    alert('Added to Black List');
  }

  toDetails(videoId: number) {
    // Navigate to the details route with the videoId
    this.router.navigate(['/peliculas/', videoId]);
  }
  // Track by id
  trackById(index: number, video: any): number {
    return video.id;
  }
}
