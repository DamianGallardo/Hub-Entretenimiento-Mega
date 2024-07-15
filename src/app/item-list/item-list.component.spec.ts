import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemListComponent } from './item-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListComponent, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the items property when initialized', () => {
    expect(component.videos).toBeDefined();
  }); //espera que la propiedad de los videos este definida

  it('should set the items property with 5 items', () => {
    expect(component.videos.length).toBe(5);
  }); //espera que la propiedad de los videos tenga 5 items

  it('should navigate to details page when toDetails method is called', () => {
    const navigateSpy = spyOn(router, 'navigate').and.stub();
    const videoId = 1; 

    component.toDetails(videoId);

    expect(navigateSpy).toHaveBeenCalledWith(['/peliculas/', videoId]);
  }); //espera que se haya redirigido a la pagina de detalles cuando se llame al metodo toDetails

  it('should add video to favorites and update localStorage', () => {
    const videoId = 1; 
    const initialFavoritesLength = component.listFavorites.length;
    const initialLocalStorage = localStorage.getItem('favoritos');

    component.addToFavorites(videoId);

    expect(component.listFavorites.length).toBe(initialFavoritesLength + 1);

    const updatedLocalStorage = localStorage.getItem('favoritos');
    const updatedFavorites = JSON.parse(updatedLocalStorage || '[]');
    const addedVideo = updatedFavorites.find((v: any) => v.id === videoId);

    expect(addedVideo).toBeTruthy();
    expect(updatedFavorites.length).toBe(initialFavoritesLength + 1);
  }); //espera que se haya añadido un video a favoritos y se haya actualizado el localStorage

  it('should display alert message when video is added to favorites', () => {
    spyOn(window, 'alert'); 

    const videoId = 1; 
    component.addToFavorites(videoId);

    expect(window.alert).toHaveBeenCalledWith('Added to favorites');
  }); //espera que se haya mostrado un mensaje de alerta cuando se haya añadido un video a favoritos

  it('should not add video to favorites if videoId does not exist', () => {
    const nonExistentVideoId = 100; 
    const initialFavoritesLength = component.listFavorites.length;

    component.addToFavorites(nonExistentVideoId);

    expect(component.listFavorites.length).toBe(initialFavoritesLength); 
  }); //espera que no se haya añadido un video a favoritos si el videoId no existe


});
