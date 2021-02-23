import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../services/post-service.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserPostsResolverService implements Resolve<Post[]> {

  constructor(private readonly PostService: PostService,
    private readonly UserService:UserService
    ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Post[]> {
    const userId = Number.parseInt(route.params.userId);
    return this.PostService.getPostsByUser(userId);
  }
}
