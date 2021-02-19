import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EerciciosDiretivasComponent } from './eercicios-diretivas.component';

describe('EerciciosDiretivasComponent', () => {
  let component: EerciciosDiretivasComponent;
  let fixture: ComponentFixture<EerciciosDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EerciciosDiretivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EerciciosDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
