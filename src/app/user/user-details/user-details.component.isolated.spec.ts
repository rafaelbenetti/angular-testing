

import { UserDetailsComponent } from "./user-details.component";

describe('UserDetailsComponent (isolated)', () => {
    let component = new UserDetailsComponent();

    it('should delete a user', () => {
        spyOn(component.onDelete, 'emit');
        component.delete(); 
        expect(component.onDelete.emit).toHaveBeenCalled();
    });
});





