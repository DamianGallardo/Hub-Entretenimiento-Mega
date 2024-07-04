import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <div class="container-nav">
        <div class="logo">Hub-Peliculas</div>
        <div class="nav-links">
          @for (item of navLinks; track item.name) {
            <a href={{item.path}} target="_blank" >{{ item.name }}</a>
          }
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

  navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Generos',
      path: '/generos'
    },
    {
      name: 'Favoritos',
      path: '/favoritos'
    },
    {
      name: 'Series',
      path: '/series'
    },
    {
      name: 'Peliculas',
      path: '/peliculas'
    },
    {
      name: 'Configuracion',
      path: '/configuracion'
    },
    {
      name: 'Login',
      path: '/login'
    }

  ];

}
