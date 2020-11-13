import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalRootComponent } from './animal-root.component';

describe('AnimalRootComponent', () => {
  let component: AnimalRootComponent;
  let fixture: ComponentFixture<AnimalRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalRootComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
