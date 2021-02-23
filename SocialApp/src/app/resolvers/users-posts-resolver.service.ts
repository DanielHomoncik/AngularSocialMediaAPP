import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../services/post-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersPostsResolverService implements Resolve<Post[]>  {

  constructor(private readonly postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Post[]> {
  return this.postService.getPosts();

   
  }
}
