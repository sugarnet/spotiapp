import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDd8dlzKpECHExfVM9L1BzfokXJ8VfZmwjTJgAxO_P5br4Q4AEqO9NSxRenmYWXh7P2jIUHIRfJkb5VZnA';

  constructor( private http: HttpClient ) {
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${ this.token }`
    });
  }

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { getHeaders() })
            .pipe( map( data => data['albums'].items ) );
  }
  
  getArtista(termino: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
            .pipe( map( data => data['artists'].items ) );
  }
}
