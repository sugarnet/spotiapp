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
      Authorization: 'Bearer BQDg6hDkhCvnWNbg5DKkpcQ_SCPCQVb7Cu0oynV73w7wq6gM9pem6-vIxsvCNMaoPsyI3B2weUzrcIFPoL8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
