import { SuperUsersPipe } from './super-users.pipe';
import { User } from '.';

describe('SuperUsersPipe (isolated)', () => {
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
    },
    {
      id: 2,
      name: 'John',
      surname: 'Dude'
    }
  ];

  it('create an instance', () => {
    const pipe = new SuperUsersPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return only super users', () => {
    const pipe = new SuperUsersPipe();
    const superUsers = pipe.transform(users);
    expect(superUsers.length).toBe(2);
  });

  it('should return NULL when NULL is passed', () => {
    const pipe = new SuperUsersPipe();
    const superUsers = pipe.transform(null);
    expect(superUsers).toBeNull();
  });

  it('should return UNDEFINED when UNDEFINED is passed', () => {
    const pipe = new SuperUsersPipe();
    const superUsers = pipe.transform(undefined);
    expect(superUsers).toBeUndefined();
  });
});
