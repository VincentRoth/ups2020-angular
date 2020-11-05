import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRootComponent } from './animal-root.component';

describe('AnimalRootComponent', () => {
  let component: AnimalRootComponent;
  let fixture: ComponentFixture<AnimalRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalRootComponent ]
    })
    .compileComponents();
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
