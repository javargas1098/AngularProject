import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { Comentario } from '../../models/comentario';
import { Track } from '../../models/track';
import { Performer } from '../../models/performer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumService: AlbumService,private router: Router) { }
  albums: Album[];
  comments:Array<Comentario>;
  performers:Array<Performer>;
  tracks:Array<Track>;
  getAlbumsList() {
    this.albumService.getAllAlbums().subscribe(cs => {
      this.albums = cs;

    });
  }


  ngOnInit() {
    this.getAlbumsList();
  }

}
