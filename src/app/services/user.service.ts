import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersURL)
      .pipe(
        map((data: User[]) => {
          console.log(data)
          return data;
        }))
  }
}
