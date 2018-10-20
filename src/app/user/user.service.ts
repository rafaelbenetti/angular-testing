import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/users/${id}`);
  }
}
