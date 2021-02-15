import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Post } from '../post';
import{ Albums } from '../albums'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/users`);
  }

  getUser(userId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/users/${userId}`);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }
  // getUserPosts(userId: number): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.URL}/posts${userId}`);
  // }
  getAlbums(): Observable<Albums[]>{
    return this.http.get<Albums[]>(`${this.URL}/albums`);
  }


}