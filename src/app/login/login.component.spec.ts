import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule.withRoutes([]),LoginComponent]
    
    })
    .compileComponents();
    fb = TestBed.inject(FormBuilder);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });//espera que el componente se haya creado

  it('should logout and navigate to /login', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'Admin@gmail.com', password: '1234' }));

    spyOn(router, 'navigate');

    component.logout();

    expect(localStorage.getItem('user')).toBeNull(); 
    expect(component.isLoggedIn).toBeFalse(); 
    expect(router.navigate).toHaveBeenCalledWith(['/login']); 
  });//espera que el usuario se haya cerrado y se haya redirigido a /login

  it('should navigate to /peliculas on successful login', () => {
    component.loginForm.setValue({ email: 'Admin@gmail.com', password: '1234' });

    spyOn(router, 'navigate');

    component.onSubmit();

    expect(component.isLoggedIn).toBeTrue(); 
    expect(localStorage.getItem('user')).toBeTruthy(); 
    expect(router.navigate).toHaveBeenCalledWith(['/peliculas']);
  });//espera que se haya redirigido a /peliculas en el inicio de sesión exitoso

  it('should set isLoggedIn to true if user exists in localStorage', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'Admin@gmail.com', password: '1234' }));

    component.ngOnInit();

    expect(component.isLoggedIn).toBeTrue();
  });//espera que isLoggedIn sea verdadero si el usuario existe en localStorage

  it('should set isLoggedIn to false if user does not exist in localStorage', () => {
    localStorage.removeItem('user');
    component.ngOnInit();
    expect(component.isLoggedIn).toBeFalse();
  });//espera que isLoggedIn sea falso si el usuario no existe en localStorage
  

});
