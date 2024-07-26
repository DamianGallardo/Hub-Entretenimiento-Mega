import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        RouterModule,
        NavbarComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });//espera que el componente se haya creado

  it('should render the logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.logo')?.textContent).toContain('Hub-Peliculas');
  });//espera que el contenido de la etiqueta con clase logo contenga el texto Hub-Peliculas

  it('should have the correct number of nav links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.nav-links a');
    expect(navLinks.length).toBe(4); // Peliculas, Favoritos, Iniciar Sesión, Registrarse
  });

  // it('should return "Cerrar Sesión" if user is authenticated', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue('true');
  //   const authLink = component.getAuthLink();
  //   expect(authLink.name).toBe('Cerrar Sesión');
  // });//espera que el nombre del enlace sea Cerrar Sesión si el usuario está autenticado

  // it('should return "Iniciar Sesión" if user is not authenticated', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(null);
  //   const authLink = component.getAuthLink();
  //   expect(authLink.name).toBe('Iniciar Sesión');
  // });//espera que el nombre del enlace sea Iniciar Sesión si el usuario no está autenticado
});
