import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoDataAccessComponent } from './to-do-data-access.component';

describe('ToDoDataAccessComponent', () => {
  let component: ToDoDataAccessComponent;
  let fixture: ComponentFixture<ToDoDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
