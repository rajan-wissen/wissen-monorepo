import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoUiComponent } from '@angular-monorepo/to-do/ui';
import { AddTodoComponent, ITodo } from '../add-todo/add-todo.component';
import { ToDoService } from '@angular-monorepo/to-do/data-access'; 


@Component({
  selector: 'lib-to-do-feature',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, ToDoUiComponent],
  templateUrl: './to-do-feature.component.html',
  styleUrl: './to-do-feature.component.css',
})
export class ToDoFeatureComponent implements OnInit {
  todoList: ITodo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  addTodoHandler(todo:ITodo) {
    const todoItem:ITodo = {
      id: Date.now(), 
      title: todo.title, 
      description: todo.description, 
      isCompleted:  false
    }
    this.todoService.addTodo(todoItem);

    this.todoList = this.todoService.getTodos();
  }

  deleteTodoHandler({ id }:ITodo) {
    this.todoList = this.todoList.filter((todo) => todo.id!== id);
    this.todoService.setTodos(this.todoList);
  }

}
