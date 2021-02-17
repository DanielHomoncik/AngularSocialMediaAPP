import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from 'src/app/photos';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photos[] = [];
  albumId = 0;
  listLoaded: boolean = false;
  constructor(private readonly userService: UserService,
    public readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get("albumId")
    const ID = (albumId === null) ? 0 : Number.parseInt(albumId)
    this.userService.getPhoto(ID)
      .subscribe(value => {
        this.albumId = ID;
        this.photos = value;
         this.listLoaded = true;
      }
      )
  };

}
