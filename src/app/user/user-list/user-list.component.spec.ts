import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User } from '../index';
import { SuperUsersPipe } from '../super-users.pipe';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const users: User[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, SuperUsersPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.users = users;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
