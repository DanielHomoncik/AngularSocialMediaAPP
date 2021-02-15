import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[]=[];
  listLoaded: Boolean = false;
  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe(value => {
        this.users = value;
        this.listLoaded = true;
      });
  }
}
