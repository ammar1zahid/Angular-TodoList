import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./tasks/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent 
{
  users = DUMMY_USERS;
  SelectedUserId?: string;

  get selectedUserObject() {

    const selectedUser = this.users.find((user) => user.id === this.SelectedUserId);
    return selectedUser;
  }



  OnSelectUserParent(id: string) {
    console.log(` ID: ${id}`);
    this.SelectedUserId = id;
  }
}
