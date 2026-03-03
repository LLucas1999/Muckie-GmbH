import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktDetailComponent } from './produkt-detail';

describe('ProduktDetail', () => {
  let component: ProduktDetailComponent;
  let fixture: ComponentFixture<ProduktDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
