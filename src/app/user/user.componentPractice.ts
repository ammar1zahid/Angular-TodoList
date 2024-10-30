import { Component , signal , computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
export class UserComponentPractice {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // selectedUser = DUMMY_USERS[randomIndex];


  //using normal zone approach
  // get imageUrl() {
  //   return `../../assets/users/${this.selectedUser.avatar}`;
  // }


  //using signal approach
  imageUrl = computed(() => `../../assets/users/${this.selectedUser().avatar}`);


  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    //using normal zone approach
    // this.selectedUser = DUMMY_USERS[randomIndex];
    
    //using signal approach
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}

