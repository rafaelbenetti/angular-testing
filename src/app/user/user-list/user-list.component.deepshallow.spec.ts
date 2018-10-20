import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { User } from '../index';
import { SuperUsersPipe } from '../super-users.pipe';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('UserListComponent (deepshallow)', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let el: DebugElement;
  const users: User[] = [
    {
      id: 0,
      name: 'John',
      surname: 'Super'
    },
    {
      id: 1,
      name: 'Paul',
      surname: 'Super'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        UserDetailsComponent,
        SuperUsersPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.users = users;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all users', () => {
    const details = el.queryAll(By.directive(UserDetailsComponent));
    expect(users.length).toBe(details.length);
  });

  it('should EMIT delete event with a user', () => {
    spyOn(component.deleteUser, 'emit');

    const details = el.query(By.directive(UserDetailsComponent));
    const button = details.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.deleteUser.emit).toHaveBeenCalled();
  });
});
