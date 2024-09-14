import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoUiComponent } from './to-do-ui.component';

describe('ToDoUiComponent', () => {
  let component: ToDoUiComponent;
  let fixture: ComponentFixture<ToDoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
