import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'posts', component: PostsComponent },
  {path:'users', component: UsersComponent },
  {path:'todos', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
