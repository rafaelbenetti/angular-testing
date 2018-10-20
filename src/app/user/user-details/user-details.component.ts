import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from '../index';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Output() deleteUser = new EventEmitter();
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  onDeleteUser() {
    this.deleteUser.emit();
  }
}
