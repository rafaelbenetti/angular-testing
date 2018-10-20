import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() deleteUser = new EventEmitter<User>();
  @Input() users: User[];

  constructor() { }

  ngOnInit() { }

  onDeleteUser(user: User): void {
    this.deleteUser.emit(user);
  }
}
