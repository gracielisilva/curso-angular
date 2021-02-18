import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDataDatabindingComponent } from './exercicio-data-databinding.component';

describe('ExercicioDataDatabindingComponent', () => {
  let component: ExercicioDataDatabindingComponent;
  let fixture: ComponentFixture<ExercicioDataDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDataDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDataDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
