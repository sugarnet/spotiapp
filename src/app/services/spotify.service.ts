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
      Authorization: 'Bearer BQCmw2I6pY-7Xf5tp0_XicQ9KEXCgBk9GP7Wiuez99F3rggVPturlCPozd9wibqK1-O-rtbi1730e1jPjOE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
  
  getArtista(termino: string) {
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCmw2I6pY-7Xf5tp0_XicQ9KEXCgBk9GP7Wiuez99F3rggVPturlCPozd9wibqK1-O-rtbi1730e1jPjOE'
    });
  
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
