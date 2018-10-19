import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserService } from "./user";
import { environment } from "src/environments/environment";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { doesNotThrow } from "assert";
import { element } from "protractor";

describe('AppComponent (integration)', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: DebugElement;
    let httpTestingController: HttpTestingController;
    let users = [{
        id: 2,
        name: 'Super',
        surname: 'Dude'
    }];
    let url = `${environment.url}/users`;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, UserListComponent, UserDetailsComponent],
            imports: [HttpClientTestingModule],
            providers: [UserService]
        }).compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        fixture.detectChanges();
        httpTestingController = TestBed.get(HttpTestingController);
    })

    it('should make a GET request on users', () => {
        let request = httpTestingController.expectOne(url);
        request.flush(users);

        expect(request.request.method).toBe('GET');
        httpTestingController.verify();
    });

    it('should show all users', () => {
        component.users = users;
        fixture.detectChanges();

        let userDetailsComponents = el.queryAll(By.directive(UserDetailsComponent));

        expect(users.length).toBe(userDetailsComponents.length);
    });

    it('should show all users with correct information', () => {
        component.users = users;
        fixture.detectChanges();

        let userDetailsComponents = el.queryAll(By.directive(UserDetailsComponent));

        for (let i = 0; i < users.length; i++) {
            let userEl = userDetailsComponents[i].nativeElement;
            let name = userEl.querySelector('.name').innerHTML;
            let surname = userEl.querySelector('.surname').innerHTML;

            expect(name).toBe(users[i].name);
            expect(surname).toBe(users[i].surname);
        }
    });

    it('should delete a user', () => {        
        component.users = users;
        fixture.detectChanges();
                
        let userDetailsComponent = el.query(By.directive(UserDetailsComponent));
        let button = userDetailsComponent.nativeElement.querySelector('button');
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(component.users.length).toBe(users.length - 1);
    });
})