import { AdressDetails } from '../../adress-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userPost: Post[] = [];
  UserLoaded: boolean = false;
  userId: number;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.user = this.route.snapshot.data.User;
    this.userPost = this.route.snapshot.data.Posts;
    this.UserLoaded =  true;
  }
}
