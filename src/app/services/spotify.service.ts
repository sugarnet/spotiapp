import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDxjvo9O0Vn4RmCjqN5pYqhVlkcm1XJ7RAOEH0NES13hJ_NUavirckJLXTj9yB_yIfLaGRN83KdONPhvwI'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( (data) => {
        console.log(data);
      });
  }
}
