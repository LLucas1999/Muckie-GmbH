import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktListe } from './produkt-liste';

describe('ProduktListe', () => {
  let component: ProduktListe;
  let fixture: ComponentFixture<ProduktListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktListe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
