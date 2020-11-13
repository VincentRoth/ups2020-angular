import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

import { VetFormComponent } from './vet-form.component';

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetFormComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [VeterinarianService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
