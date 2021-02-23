import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }
  getPostsByUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/users/${userId}/posts`);
  }

}
