
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ColeccionistaService } from '../../coleccionista/coleccionista.service';
import { Coleccionista } from '../../coleccionista/coleccionista';
import { SaveAlbumComment } from '../../models/saveAlbumComment';
import {TrackAlbum}from '../../models/trackAlbum';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;
  collectors: Coleccionista[];
  date = new Date();
  formComment: FormGroup;
  formTrack:FormGroup;
  ratingList: number[] = [1, 2, 3, 4, 5]


  constructor(
    private albumService: AlbumService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private collectorService: ColeccionistaService
  ) {
  }

  getAlbum() {
    const musicianId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumById(musicianId).subscribe(album => {
      this.album = album;
      console.log(this.album);
    })
  }
  getCollectorsList() {
    this.collectorService.getAllCollectors().subscribe(cs => {
      this.collectors = cs;
      console.log(this.collectors);
    });
  }


  ngOnInit() {
    this.getAlbum();
    this.getCollectorsList();
    this.formComment = this.formBuilder.group({
      description: ['', Validators.required],
      rating: ['', Validators.required],
      collector: ['', Validators.required],
    });
    this.formTrack = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  changeRating(e) {
    console.log(e.target.value)
    this.rating.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeCollector(e) {
    console.log(e.target.value.id)
    this.collector.setValue(e.target.value.id, {
      onlySelf: true
    })
  }

  get rating() {
    return this.formComment.get('rating');
  }

  get description() {
    return this.formComment.get('description');
  }

  get collector() {
    return this.formComment.get('collector');
  }
  saveTrack(){
    let track = new TrackAlbum();
    track.name = this.formTrack.value.name;
    track.duration = this.formTrack.value.duration;
    this.albumService.saveTrackByAlbumById(this.album.id,track).subscribe(a => {

     console.warn("el track*** fue creado", a);
     window.location.reload();
    });
  }

  saveComment() {
    let saveComment: SaveAlbumComment = new SaveAlbumComment();
    saveComment.collector.id = this.formComment.value.collector;
    saveComment.description = this.formComment.value.description;
    saveComment.rating = this.formComment.value.rating;

    console.log(saveComment)
    this.albumService.saveCommentByAlbumById(this.album.id , saveComment).subscribe(
      data => {
        localStorage.setItem("Data", JSON.stringify(data));
        window.location.reload();

      }, error => {
        console.error(error);
      }
    );
  }
}
