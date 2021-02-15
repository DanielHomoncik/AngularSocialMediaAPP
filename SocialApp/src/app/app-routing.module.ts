import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalPostListComponent } from './components/global-post-list/global-post-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/:userId',
    component: UserDetailsComponent,
  },
  {
    path: 'posts',
    component: GlobalPostListComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
