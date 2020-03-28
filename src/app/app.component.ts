import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  todos = [];
  originalTodo = [];
  nextId = 3;

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        text: "Meeting at 11am"
      }, {
        id: 2,
        text: "Car Wash today"
      }
    ];
    // Create Copy of ToDo
    this.originalTodo = JSON.parse(JSON.stringify(this.todos));
  }

  addTodoItem(todoItem) {
    console.log("Parent :" + todoItem);
    this
      .todos
      .push({
        id: this.nextId++,
        text: todoItem
      });
    // Update Original Todo
    this.originalTodo = JSON.parse(JSON.stringify(this.todos));
  }

  removeTodoItem(id) {
    console.log("Parent :" + id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.originalTodo = JSON.parse(JSON.stringify(this.todos));
  }

  updateTodoItem = (id) => {

  }

  cancelTodoItem = (id) => {
    // var tempTodo = this.originalTodo.filter((todo) => todo.id == id);
    // var index = this.originalTodo.findIndex(a => a.id == id);
    // this.todos = this.todos.filter((todo) => todo.id !== id);
    // this.todos.splice(index, 0, tempTodo[0]);
    // this.todos = JSON.parse(JSON.stringify(this.originalTodo));
  }
}
