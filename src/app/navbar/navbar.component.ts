import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="container-nav">
        <div class="logo">Hub-Peliculas</div>
        <div class="nav-links">
          <ng-container *ngFor="let item of navLinks; trackBy: trackByName">
            <a [routerLink]="[item.path]" target="_self">{{ item.name }}</a>
          </ng-container>
        </div>
      </div>
    </nav>
  `,
  styles:  `
  .navbar {
    background-color: #fc6b32;
    color: white;
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  .container-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5em;
    font-weight: bold;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    .container-nav {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
    }

    .nav-links a {
      margin: 5px 0;
    }
  }
`
})
export class NavbarComponent {
  get navLinks() {
    return [
      { name: 'Home', path: '/' },
      // { name: 'Generos', path: '/generos' },
      { name: 'Favoritos', path: '/favoritos' },
      // { name: 'Series', path: '/series' },
      { name: 'Peliculas', path: '/peliculas' },
      // { name: 'Configuracion', path: '/configuracion' },
      // this.getAuthLink(),
      { name: 'Iniciar Sesión', path: '/login' }
    ];
  }

  // getAuthLink() {
  //   if (typeof window !== 'undefined' && localStorage) {
  //     const isAuthenticated = !!localStorage.getItem('user');
  //     return isAuthenticated
  //       ? { name: 'Cerrar Sesión', path: '/login' }
  //       : { name: 'Iniciar Sesión', path: '/login' };
  //   }
  //   return { name: 'Iniciar Sesión', path: '/login' };
    
  // }
  trackByName(index: number, item: any): string {
    return item.name;
  }
}
