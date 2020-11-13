import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalDetailComponent } from './animal-detail.component';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
