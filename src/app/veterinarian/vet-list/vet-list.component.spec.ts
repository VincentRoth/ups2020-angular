import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

import { VetListComponent } from './vet-list.component';

describe('VetListComponent', () => {
  let component: VetListComponent;
  let fixture: ComponentFixture<VetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [VeterinarianService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
