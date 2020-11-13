import { UpperCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { TruncatePipe } from '../../shared/truncate.pipe';
import { UppercaseDirective } from '../../shared/uppercase.directive';

import { AnimalItemComponent } from './animal-item.component';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalItemComponent, UppercaseDirective, TruncatePipe],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = {
      id: 1,
      name: 'Idéfix',
      species: 'Chien',
      veterinarian: "Panoramix D'Armorique",
      comment: 'Développe une allergie à la potion magique.',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
