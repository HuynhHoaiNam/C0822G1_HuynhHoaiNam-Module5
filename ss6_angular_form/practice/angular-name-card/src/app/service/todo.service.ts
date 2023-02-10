import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Todo} from "../todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Todo[]>("http://localhost:3000/todo")
  }
}
