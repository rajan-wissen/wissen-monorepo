import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionWorldUiComponent } from './fashion-world-ui.component';

describe('FashionWorldUiComponent', () => {
  let component: FashionWorldUiComponent;
  let fixture: ComponentFixture<FashionWorldUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionWorldUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionWorldUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
