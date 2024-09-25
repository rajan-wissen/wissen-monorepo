import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id?: number;
  title: string;
  description: string;
  isCompleted?:  boolean;
}

@Component({
  selector: 'lib-to-do-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-ui.component.html',
  styleUrl: './to-do-ui.component.css',
})
export class ToDoUiComponent {
  @Input() todoList:Todo[] =  [];
  @Output() deleteTodoEvent = new EventEmitter<Todo>();
  
    deleteTodo(todo: Todo) {
      this.deleteTodoEvent.emit(todo);
    }
}
