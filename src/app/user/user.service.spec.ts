import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

describe('UserService (isolated)', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;
  const url = environment.url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call users resource with GET method', () => {
    service.get().subscribe();

    const request = httpTestingController.expectOne(`${url}/users`);
    request.flush([]);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call users resource with DELETE method', () => {
    const userId = 55;
    service.delete(userId).subscribe();

    const request = httpTestingController.expectOne(`${url}/users/${userId}`);
    request.flush([]);

    expect(request.request.method).toBe('DELETE');
    httpTestingController.verify();
  });
});
