import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Todo-List',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() id: number;
  @Input() text: string;
  @Output() removeTodo = new EventEmitter<string>();
  @Output() updateTodo = new EventEmitter<string>();
  @Output() cancelTodo = new EventEmitter<string>();
  @Output() toggleStatus = new EventEmitter<string>();

  isEdited: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeTodoItem(id) {
    this.removeTodo.emit(id);
  }

  editTodoItem(id) {
    this.isEdited = true;
  }

  cancelTodoItem(id) {
    this.isEdited = false;
    this.cancelTodo.emit(id);
  }

  updateTodoItem(id) {
    this.isEdited = false;
    this.updateTodo.emit(id);
  }

}
