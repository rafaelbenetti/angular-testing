import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get()
        .subscribe(users => this.users = users);
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u.id !== user.id);
    this.userService.delete(user.id)
        .subscribe();
  }
}
