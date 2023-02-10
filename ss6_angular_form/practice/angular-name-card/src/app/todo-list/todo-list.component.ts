import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
this.todoService.getAll()
  }

  ngOnInit(): void {
  }


}
