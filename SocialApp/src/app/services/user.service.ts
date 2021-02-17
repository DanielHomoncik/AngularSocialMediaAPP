import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Post } from '../post';
import { Albums } from '../albums'
import { Photos } from '../photos';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/users/${userId}`);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }
  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(`${this.URL}/albums`);
  }
  getPhoto(albumId: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.URL}/albums/${albumId}/photos`);
  }
}