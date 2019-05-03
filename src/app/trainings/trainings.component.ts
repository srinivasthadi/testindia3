import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/authservice/authservice.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  _url : string = 'https://jsonplaceholder.typicode.com/posts';
  users : any ;
  userData: any;

  constructor( private http: HttpClient, public authService: AuthserviceService) { }

  getUsers(){
    return this.http.get(this._url);
  }

  ngOnInit() {
    // this.getUsers()
    //     .subscribe(data => this.users = data );
    
  }

  logoutUser(){
    this.authService.logout();
  }

  



}
