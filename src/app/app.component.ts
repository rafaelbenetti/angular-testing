import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get()
        .subscribe(users => this.users = users);
  }

  onDeleteUser(user: User): void {
    this.users = this.users.filter(u => u.id !== user.id);
    this.userService.delete(user.id)
        .subscribe();
  }
}
