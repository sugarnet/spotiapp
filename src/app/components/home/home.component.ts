import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  loading: boolean;

  canciones: any[] = [];
  constructor( private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      this.canciones = data;
      this.loading = false;
    });
  }

}
