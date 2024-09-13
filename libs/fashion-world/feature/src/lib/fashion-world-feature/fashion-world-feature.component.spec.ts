import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionWorldFeatureComponent } from './fashion-world-feature.component';

describe('FashionWorldFeatureComponent', () => {
  let component: FashionWorldFeatureComponent;
  let fixture: ComponentFixture<FashionWorldFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionWorldFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionWorldFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
