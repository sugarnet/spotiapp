import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Source } from 'webpack-sources';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQA3wxFp-YblOVsqF1dPgk-6zkBgSyzHt36RDyHftNkmQA4a-X68YgNKl3ObEG5lcy-ZiykOam_lYZBPOR0';

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
}
