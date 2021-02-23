import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalPostListComponent } from './components/global-post-list/global-post-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UserByIdResolverService } from './resolvers/user-by-id-resolver.service';
import { UserPostsResolverService } from './resolvers/user-posts-resolver.service';
import { UsersPostsResolverService } from './resolvers/users-posts-resolver.service';
import { UsersListResolverService } from './resolvers/users-list-resolver.service';
import { AlbumsResolverService } from './resolvers/albums-resolver.service';
import {PhotosResolverService } from './resolvers/photos.service';


const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    resolve: {
      UserList: UsersListResolverService,
    }
  },

  {
    path: 'users/:userId',
    component: UserDetailsComponent,
    resolve: {
      User: UserByIdResolverService,
      Posts: UserPostsResolverService,
    }

  },
  {
    path: '',
    component: GlobalPostListComponent,
    resolve: {
      Post: UsersPostsResolverService,
    }
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    resolve: {
      Albums: AlbumsResolverService,
    }
  },
  {
    path: 'albums/:albumId/photos',
    component: PhotosComponent,
    resolve: {
      Photo: PhotosResolverService,
    },
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
