import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersPostsResolverService } from 'src/app/resolvers/users-posts-resolver.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from "../../post"
@Component({
  selector: 'app-global-post-list',
  templateUrl: './global-post-list.component.html',
  styleUrls: ['./global-post-list.component.scss']
})
export class GlobalPostListComponent implements OnInit {

  posts: Post[] ;
  tableColor: boolean = false;
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.posts = this.route.snapshot.data.Post;

  }


}
