import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any;
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.getArtista(params['id']);
    } );
  }

  getArtista( id: string ) {
    this.loading = true;
    this.spotify.getArtista( id ).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
      console.log(this.artista);
    });

  }

}
