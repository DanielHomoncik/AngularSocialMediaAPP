import { AdressDetails } from '../../adress-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userPost: Post[] = [];
  listLoaded: boolean = false;
  userId: number;

  constructor(
    public readonly userService: UserService,
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("userId")
    const ID = (userId === null) ? 0 : Number.parseInt(userId)

    this.userService.getUser(ID)
      .subscribe(value => {
        this.user = value;
        this.listLoaded = true;
      });

    this.userId = ID;
    this.userService.getPosts()
      .subscribe(value => {
        this.userPost = value
        this.listLoaded = true;
      });
  }
}
