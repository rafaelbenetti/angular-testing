import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User, UserService } from './user';
import { of } from 'rxjs/internal/observable/of';

describe('AppComponent', () => {
  const users: User[] = [];
  const userServiceMock = jasmine.createSpyObj(['delete', 'get']);
  userServiceMock.get.and.returnValue(of(users));
  userServiceMock.delete.and.returnValue(of(true));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: UserService, useValue: userServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular 2+ Testing!');
  });
});
