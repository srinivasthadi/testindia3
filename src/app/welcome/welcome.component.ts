
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Users } from "./user.model";
import { Observable} from "rxjs";
import { Photos } from './photos.model';
import { PhotoserviceService } from './photoservice.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // private users: Users [];
  // users_url: string = 'https://jsonplaceholder.typicode.com/users';
  displayedColumns = ['albumid', 'id', 'title', 'url', 'thumbnailurl'];
  dataSource = new MatTableDataSource<Photos>();
  private _photos: Photos[];
  constructor(private http: HttpClient, public photoservice: PhotoserviceService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.photoservice.get_photos ()
      .subscribe( (result : Photos[]) => this.dataSource.data = result,
      error => console.log(error));
  }
}
