import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { User } from '../user.model';

describe('UserDetailsComponent (shallow)', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  
  let user: User = {
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
    let el = fixture.nativeElement;

    let name = el.querySelector('.name').innerHTML;
    expect(name).toContain(user.name);

    let surname = el.querySelector('.surname').innerHTML;
    expect(surname).toContain(user.surname);
  });

  it('should delete correct user', () => {
    spyOn(component.onDelete, 'emit');
    
    let el = fixture.nativeElement;
    let button = el.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.onDelete.emit).toHaveBeenCalled();
  });


  


});




