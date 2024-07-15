import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosComponent, CommonModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the favorites property when initialized', () => {
    expect(component.favorites).toBeDefined();
  }); //espera que la propiedad de los favoritos este definida


  it('should display favorites when favorites list is not empty', () => {
    component.favorites = [
      {
        id: 1,
        img: 'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg?region=0%2C0%2C1080%2C1350',
        titulo: 'Encanto',
        description: 'Encanto es una película de animación musical estadounidense de 2021 producida por Walt Disney Animation Studios.'
      },
      {
        id: 2,
        img: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png',
        titulo: 'intensamente 2',
        description: 'Intensamente 2 es una película de animación musical estadounidense de 2024 producida por Walt Disney Animation Studios.'
      },
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const divCardVideos = compiled.querySelectorAll('.div-card-videos');

    expect(divCardVideos.length).toBe(2);

    expect(divCardVideos[0].querySelector('h2').textContent).toContain('Encanto');
    expect(divCardVideos[1].querySelector('h2').textContent).toContain('intensamente 2');
  }); //espera que se muestren los favoritos cuando la lista de favoritos no esta vacia


});
