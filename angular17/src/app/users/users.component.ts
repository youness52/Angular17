import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  users :any[]=[];
  constructor(private http : HttpClient){}

  ngOnInit(): void {
      this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
        users => {
          this.users = users;
        }
      );
  }

}
