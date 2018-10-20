import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { User } from '../user.model';

describe('UserDetailsComponent (shallow)', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  const user: User = {
    id: 0,
    name: 'John',
    surname: 'Paul'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all user properties', () => {
    const el = fixture.nativeElement;

    const name = el.querySelector('.name').innerHTML;
    expect(name).toContain(user.name);

    const surname = el.querySelector('.surname').innerHTML;
    expect(surname).toContain(user.surname);
  });

  it('should EMIT delete for a user', () => {
    spyOn(component.deleteUser, 'emit');

    const el = fixture.nativeElement;
    const button = el.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.deleteUser.emit).toHaveBeenCalled();
  });
});
