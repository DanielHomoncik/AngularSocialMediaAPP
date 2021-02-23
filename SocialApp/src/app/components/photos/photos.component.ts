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

  photos: Photos[] ;
  constructor(private readonly userService: UserService,
    public readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.photos = this.route.snapshot.data.Photo
  }

}
