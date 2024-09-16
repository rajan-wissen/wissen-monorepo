import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ITodoForm {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
}

export interface ITodo {
  id?: number;
  title: string;
  description: string;
  isCompleted?:  boolean;
}

@Component({
  selector: 'lib-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent implements OnInit {

  @Output() addTodoEvent = new EventEmitter<ITodo>();
  todoForm!: FormGroup<ITodoForm>;

  get title(): FormControl<string> {
    return this.todoForm.get('title') as FormControl<string>;
  }

  get description(): FormControl<string> {
    return this.todoForm.get('description') as FormControl<string>;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { 
      // this.todoForm = this.formBuilder.group<TodoForm>({
      //   title: ['', [
      //     Validators.required,
      //     Validators.maxLength(6)
      //   ]],
  
      //   description: ['', [
      //     Validators.required,
      //     Validators.minLength(3)
      //   ]],
      // });
  }

  initTodoForm() {
    this.todoForm = this.formBuilder.group<ITodoForm>({
      title: new FormControl<string>('', [
        Validators.required
      ]),
      description: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }


  ngOnInit(): void {
    this.initTodoForm();
  }

  onSubmit(): void {
    console.log(this.todoForm.value);
    if (this.todoForm.valid) {
      const formData:any = this.todoForm.value;
      console.log('Form Data:', formData);
      this.addTodoEvent.emit(formData);
      // Handle the form submission logic here
    } else {
      // Optionally, you can mark all fields as touched to show validation messages
      this.todoForm.markAllAsTouched();
    }
  }
}
