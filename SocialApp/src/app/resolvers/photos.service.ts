import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from '../photos';
import { PictureService } from '../services/picture.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosResolverService implements Resolve<Photos[]> {

  constructor( private readonly pictureService: PictureService, ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos[]>{
    const albumId= Number.parseInt(route.params.albumId);
    return this.pictureService.getPhoto(albumId);
  }
}
