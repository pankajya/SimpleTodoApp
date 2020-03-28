import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Todo-Input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  inputItem: string = "";
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addTodoItem() {
    if (this.inputItem) {
      console.log("Child :" + this.inputItem);
      this.addTodo.emit(this.inputItem);
      this.inputItem = "";
    }
    else {
      alert("Task name can not be blank.");
    }

  }
}
