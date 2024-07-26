import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas/:id', component: ItemDetailsComponent },
    { path: 'favoritos', component: FavoritosComponent},
    { path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [PeliculasComponent, ItemDetailsComponent, LoginComponent, FavoritosComponent],
})
export class AppRoutingModule {}

