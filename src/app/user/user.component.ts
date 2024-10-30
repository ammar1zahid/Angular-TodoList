import { Component, Input ,Output , EventEmitter } from '@angular/core';

import{ type User } from './user.modal';
import { CardComponent } from "../shared/card/card.component";



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent{

  @Input({required: true}) User!: User;
  @Input({required: true}) selected!:boolean;

  @Output() selectedUser = new EventEmitter<string>();

  get imageUrl() {
    return `../../assets/users/${this.User.avatar}`
  }

  onSelectUser() {
    this.selectedUser.emit(this.User.id);
    // console.log(this.name);
  }
}
