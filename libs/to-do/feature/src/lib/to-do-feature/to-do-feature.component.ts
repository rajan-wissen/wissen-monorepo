import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoUiComponent } from '@angular-monorepo/to-do/ui';
import { AddTodoComponent, ITodo } from '../add-todo/add-todo.component';


@Component({
  selector: 'lib-to-do-feature',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, ToDoUiComponent],
  templateUrl: './to-do-feature.component.html',
  styleUrl: './to-do-feature.component.css',
})
export class ToDoFeatureComponent implements OnInit {
  todoList: ITodo[] = [];

  constructor() {}

  ngOnInit() {
  }

  addTodoHandler(todo:ITodo) {
    const todoItem:ITodo = {
      id: Date.now(), 
      title: todo.title, 
      description: todo.description, 
      isCompleted:  false
    }
    this.todoList.push(todoItem);
  }

}
