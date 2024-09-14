import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionWorldDataAccessComponent } from './fashion-world-data-access.component';

describe('FashionWorldDataAccessComponent', () => {
  let component: FashionWorldDataAccessComponent;
  let fixture: ComponentFixture<FashionWorldDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionWorldDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionWorldDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
