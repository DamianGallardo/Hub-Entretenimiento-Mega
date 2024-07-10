import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  template: `
     <div *ngIf="id !== undefined && videos[id - 1]" class="container">
      <h1 class="title-details">Detalles de la Película</h1>
      <div class="div-card-videos">
        <img [src]="videos[id - 1].img" class="img-card-video" width="300" height="420" alt="Item Image">
        <h2>{{ videos[id - 1].titulo }}</h2>
        <p>{{ videos[id - 1].description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin: 0 auto;
      max-width: 800px;
    }
    .title-details {
      text-align: center;
      margin-bottom: 20px;
    }
    .div-card-videos {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img-card-video {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  `]
})
export class ItemDetailsComponent implements OnInit {
  @Input() id?: number;

  ngOnInit(): void {
    console.log("id", this.id);
  }

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
      titulo: 'Intensamente 2',
      description: 'Intensamente 2 es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
    },
    {
      id: 3,
      img: 'https://lumiere-a.akamaihd.net/v1/images/08c3f7af558231c022dcccf9eae2cd7c_2867x4096_41eff7c2.png',
      titulo: 'Wish',
      description: 'Wish es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
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

}
