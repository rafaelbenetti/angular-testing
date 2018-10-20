import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent (isolated)', () => {
    const component = new UserDetailsComponent();

    it('should delete a user', () => {
        spyOn(component.deleteUser, 'emit');
        component.onDeleteUser();
        expect(component.deleteUser.emit).toHaveBeenCalled();
    });
});
