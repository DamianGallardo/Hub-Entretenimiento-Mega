import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details.component';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetailsComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render details correctly when id is provided', () => {
    component.id = 1; 
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h2');
    const imgElement = compiled.querySelector('img');
    const descriptionElement = compiled.querySelector('p');

    expect(titleElement.textContent).toContain('Encanto');
    expect(imgElement.getAttribute('src')).toContain('encanto_ka_las_pay1_92ad7410.jpeg');
    expect(descriptionElement.textContent).toContain('Encanto es una película de animación musical estadounidense');
  });//espera que se rendericen los detalles correctamente cuando se proporcione un id

  it('should not render details when id is not provided', () => {
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h2');
    const imgElement = compiled.querySelector('img');
    const descriptionElement = compiled.querySelector('p');

    expect(titleElement).toBeNull();
    expect(imgElement).toBeNull();
    expect(descriptionElement).toBeNull();
  });//espera que no se rendericen los detalles cuando no se proporcione un id

  it('should not render details if id is undefined', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const containerElement = compiled.querySelector('.container');

    expect(containerElement).toBeNull();
  }); //espera que no se rendericen los detalles si el id es indefinido del IF

});
