import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../albums';
import { Photos } from '../photos';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private readonly URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(`${this.URL}/albums`);
  }
  getPhoto(albumId: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.URL}/albums/${albumId}/photos`);
  }
}
