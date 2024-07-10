import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas/:id', component: ItemDetailsComponent }
];

@NgModule({
    imports: [PeliculasComponent, ItemDetailsComponent]
})
export class AppRoutingModule { }

