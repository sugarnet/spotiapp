import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Source } from 'webpack-sources';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQBXZHOk0ICebj_7nK2Ko8pKstaocR-WsiDFcGej0GiyYYldd3mYPyUHqEVeQ5QYz0tGZ8kmDGM5FJ6jNLA';

  constructor( private http: HttpClient ) {
  }

  getQuery( source: string ) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.token }`
    });

    const url = `https://api.spotify.com/v1/${ source }`;

    return this.http.get( url, { headers } );
  }

  getNewReleases() {
    return this.getQuery( 'browse/new-releases' )
            .pipe( map( data => data[ 'albums' ].items ) );
  }

  getArtistas(termino: string) {
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data[ 'artists' ].items ) );
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
            .pipe( map( data => data[ 'tracks' ] ) );
  }
}
