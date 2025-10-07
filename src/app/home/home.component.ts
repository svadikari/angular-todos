import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { TodoComponent } from "./todo/todo.component";
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [TodoComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  todoForm!: FormGroup;
  todos:Todo[] = [];
  constructor(private todoService: TodoService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todo: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)])
    })
    this.todos = this.todoService.getAllTodos();
    console.log(this.todos);
  }
  addTodo() {
    if(this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.controls['todo'].value);
      this.todoForm.controls['todo'].setValue('');
    }
  }
  markComplete(id: number):void {
    console.log("Flipping status to ", id);
    this.todoService.flipTodoStatus(id);
  }
}
