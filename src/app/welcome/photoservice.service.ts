import { Injectable } from '@angular/core';
import { Photos } from './photos.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {
  private _test: Photos[];
  private album_url: string = 'https://jsonplaceholder.typicode.com/photos';
  
  constructor(private http: HttpClient) { }

  get_photos() : Observable<Photos[]> {
      return this.http.get<Photos[]>(this.album_url)
      .pipe(map(result => result))              
    } 

}

{}