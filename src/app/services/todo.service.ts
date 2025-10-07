import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todos: Todo[] = [
      {id:1, todo: 'Todo 1', completed: false, dueby: new Date()},
      {id:2, todo: 'Todo 2', completed: false, dueby: new Date()},
      {id:3, todo: 'Todo 3', completed: false, dueby: new Date()},
      {id:4, todo: 'Todo 4', completed: false, dueby: new Date()},
      {id:5, todo: 'Todo 5', completed: false, dueby: new Date()},
      {id:6, todo: 'Todo 6', completed: false, dueby: new Date()}
    ];
  constructor() { }
  getAllTodos() {
    return this.todos;
  }
  flipTodoStatus(id: number) {
    this.todos.forEach(todo => todo.id === id? todo.completed = !todo.completed : todo);
  }

  addTodo(todo: string) {
    this.todos.push({id: this.todos.length+1, todo, completed: false, dueby: new Date()});
  }
}


export interface Todo {
  id: number,
  todo: string,
  completed: boolean,
  dueby: Date
}