import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User, UserService } from '../index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() onDelete = new EventEmitter<User>();
  @Input() users: User[];  

  constructor() { }
  
  ngOnInit() { }

  delete(user: User): void {
    this.onDelete.emit(user);
  }
}
