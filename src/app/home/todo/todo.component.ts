import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from '../../utils/highlighter.directive';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule, HighlighterDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
@Input() todo?: Todo;
@Output() flipTodo = new EventEmitter<number>()
onCheckboxChange(event: Event) {
    const id = parseInt((event.target as HTMLInputElement).id);
    console.log('Checkbox checked for:', id);
    this.flipTodo.emit(id);
  }
}
