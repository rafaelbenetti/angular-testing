import { UserListComponent } from './user-list.component';
import { User } from '..';

describe('UserListComponent (isolated)', () => {
    const user: User = {
        id: 44,
        name: 'John',
        surname: 'Super'
    };

    it('should EMIT delete event', () => {
        const component = new UserListComponent();
        spyOn(component.deleteUser, 'emit');
        component.onDeleteUser(user);
        expect(component.deleteUser.emit).toHaveBeenCalled();
    });

    it('should EMIT delete event with correct user', (done) => {
        const component = new UserListComponent();
        component.deleteUser.subscribe(event => {
            expect(event).toBe(user);
            done();
        });
        component.onDeleteUser(user);
    });
});
