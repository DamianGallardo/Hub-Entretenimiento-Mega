import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [ItemListComponent],
  template: `
   
    <div class="container" >
      <app-item-list></app-item-list>
    </div>
  `,
  styles: `
    .container {
      margin-top: 20px;
      margin-left: 20px;
    }

  `
})
export class PeliculasComponent {

}
