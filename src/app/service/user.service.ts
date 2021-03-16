import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<User> {
    if (id !== 0) {
      return this.http.get<User>(`${this.endpoint}/${id}`);
    }

    return of(new User());
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
  remove(id: number): Observable<User> {
    return this.http.delete<User>(`${this.endpoint}/${id}`);
  }


  /**
   * Create a user in the database.
   * The method is: this.http.post
   */
  create(user: User): Observable<any> {
    return this.http.post<Observable<any>>(`${this.endpoint}`, user);
  }


  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */
  update(user: User): Observable<any> {
    return this.http.patch<any>(`${this.endpoint}/${user.id}`, user);
  }

}
