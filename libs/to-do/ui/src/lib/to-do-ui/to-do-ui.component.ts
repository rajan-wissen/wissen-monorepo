import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from 'libs/to-do/feature/src/lib/add-todo/add-todo.component';

@Component({
  selector: 'lib-to-do-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-ui.component.html',
  styleUrl: './to-do-ui.component.css',
})
export class ToDoUiComponent {
  @Input() todoList:ITodo[] =  [];
  @Output() deleteTodoEvent = new EventEmitter<ITodo>();
  
    deleteTodo(todo: ITodo) {
      this.deleteTodoEvent.emit(todo);
    }
}
