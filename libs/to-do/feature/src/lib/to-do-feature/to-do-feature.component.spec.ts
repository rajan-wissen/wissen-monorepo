import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoFeatureComponent } from './to-do-feature.component';

describe('ToDoFeatureComponent', () => {
  let component: ToDoFeatureComponent;
  let fixture: ComponentFixture<ToDoFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
