import { Injectable } from '@angular/core';
import { 
   ActivatedRouteSnapshot,
   Resolve, 
   RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserByIdResolverService implements Resolve<User>{

  constructor(private readonly userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = Number.parseInt(route.params.userId);
    return this.userService.getUser(userId)

  }
}
