import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  searchTerm='';
  filteredTodos: Todo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  }

  filterTodos() {
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, display all todos
      this.filteredTodos = this.todos;
    } else {
      // Filter todos by title containing the search term
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  getTodos() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      todos => {
        this.todos = todos;
        this.filteredTodos = todos;
      }
    );

  }
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
