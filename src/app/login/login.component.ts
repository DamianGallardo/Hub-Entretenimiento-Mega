import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container">
      <div *ngIf="isLoggedIn==false" class="container-login">
        <h2>Login</h2>
        <form [formGroup]="loginForm" id="form" (ngSubmit)="login()">
          <div class="form-group row">
            <label for="inputEmail3">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control"  formControlName="Email" placeholder="Email">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" formControlName="Password" placeholder="Password">
            </div>
          </div>
          <div class="form-group row">
            <div>
              <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Sign in</button>
            </div>
          </div>
          <div class="form-group row">
            <div>
            <a href="/" target="_self" class="link" >Aun no tienes cuenta registrate</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container">
    <div *ngIf="isLoggedIn==true" class="container-login">
      <h2>Logueado</h2>
      <p>Has iniciado sesion correctamente</p>
      <div class="form-group row">
        <div>
          <button class="btn btn-primary" (click)="logout()">Cerrar sesion</button>
        </div>
      </div>
    </div>
    </div>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
    p{
      text-align: center;
    }
    .container {
      width: 100%;
      margin: 30px 0 0;
      color: #121212;
    }
    .container-login {
      margin: 0 auto;
      max-width: 400px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }
    .form-group {
      margin-bottom: 1.125rem;
    }
    .col-sm-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-sm-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .btn {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    .btn-primary:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
    .btn-primary:focus {
      box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
    }
    .btn-primary:disabled {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    .btn-primary:not(:disabled):not(.disabled):active {
      color: #fff;
      background-color: #0062cc;
      border-color: #005cbf;
    }
    .btn-primary:not(:disabled):not(.disabled):active:focus {
      box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
    }
    .link {
      color: #007bff;
      text-decoration: none;
    }

  `]
})
export class LoginComponent {
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required])
  });

  isLoggedIn: boolean = false;


  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: () => (this.isLoggedIn = true, this.router.navigate(['/'])),
      error: (err: any) => console.error('Login failed')
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      this.isLoggedIn = localStorage.getItem('token') !== null;
    } else {
      this.isLoggedIn = false;
    }
  }
  

}
