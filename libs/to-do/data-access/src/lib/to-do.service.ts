import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  getTodos() {
    return JSON.parse(localStorage.getItem('todos') ?? '[]');
  }

  addTodo(todo:any) {
    const todos = this.getTodos();
    todos.push(todo);
    this.setTodos(todos);
  }

  setTodos(todos:any[]){
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // getTodos() {
  //   return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos');
  // }

  // addTodo(todo:any) {
  //   return this.httpClient.post<any>('https://dummyjson.com/todos/add', todo);
  // }
  
}
