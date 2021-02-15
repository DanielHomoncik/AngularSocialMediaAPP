import { Component, OnInit, } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Post } from "../../post"
@Component({
  selector: 'app-global-post-list',
  templateUrl: './global-post-list.component.html',
  styleUrls: ['./global-post-list.component.scss']
})
export class GlobalPostListComponent implements OnInit {

  posts: Post[] =[];
  tableColor: boolean = false;
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {

    this.userService.getPosts()
      .subscribe(value => {
        this.posts = value;
      });
  }


}
