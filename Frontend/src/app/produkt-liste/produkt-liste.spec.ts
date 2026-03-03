import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktListeComponent } from './produkt-liste';

describe('ProduktListe', () => {
  let component: ProduktListeComponent;
  let fixture: ComponentFixture<ProduktListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktListeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
