import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from 'src/app/albums';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  album: Albums[] =[]
  constructor(private readonly userService: UserService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getAlbums() .subscribe(value =>
      this.album= value)
  }

}
