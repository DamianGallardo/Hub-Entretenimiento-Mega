import { Component } from '@angular/core';
import {ItemListComponent} from '../item-list/item-list.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [ItemListComponent, CommonModule],
  template: `
    <div class="container">
      <h2>Ve los nuevos estrenos que tenemos para ti!</h2>
    </div>
    <div class="container-videos">
      <app-item-list/>
    </div>
  `,
  styles: `
  .container {
    padding: 0px 20px 0px 20px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media (min-width: 600px) {
    .container {
      width: auto;
      padding: 0px 16px 0px 16px;
    }
  }
  .container-videos {
    padding: 0px 40px 0px 40px;
    height: auto;
  }

  `
})
export class VideoListComponent {



}
