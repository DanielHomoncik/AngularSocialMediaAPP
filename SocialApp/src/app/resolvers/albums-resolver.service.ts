import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Albums } from '../albums';
import { PictureService } from '../services/picture.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolverService  implements Resolve<Albums[]>{

  constructor( private readonly pictureService: PictureService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Albums[]>{
    return this.pictureService.getAlbums()}
}
