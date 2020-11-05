import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRootComponent } from './vet-root.component';

describe('VetRootComponent', () => {
  let component: VetRootComponent;
  let fixture: ComponentFixture<VetRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
