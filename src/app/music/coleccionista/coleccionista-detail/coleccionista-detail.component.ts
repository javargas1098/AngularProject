import { Component, Input, OnInit } from '@angular/core';
import { Coleccionista } from 'src/app/music/coleccionista/coleccionista';
import { Comentario } from 'src/app/music/models/comentario';
import { ActivatedRoute } from '@angular/router';
import { ColeccionistaService } from '../coleccionista.service';
import { ArtistaFavorito } from "src/app/music/models/artistaFavorito";
import { ColeccionistaAlbum } from "src/app/music/models/coleccionistaAlbum";
import { AlbumService } from '../../album/album.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MusiciansService } from '../../musicians/musicians.service';
import { Musician } from '../../musicians/musician';
import { Album } from '../../album/album';

@Component({
  selector: 'app-coleccionista-detail',
  templateUrl: './coleccionista-detail.component.html',
  styleUrls: ['./coleccionista-detail.component.css']
})
export class ColeccionistaDetailComponent implements OnInit {


  collectorDetail: Coleccionista;
  comments: Comentario[];
  artista: ArtistaFavorito[];
  collectorAlbum: any[] =[];
  date = new Date();
  formMusic: FormGroup;
  formAlbums: FormGroup;
  musicians: Musician[];
  albumes: Album[];


  constructor(private readonly activatedRoute: ActivatedRoute, private collectorService: ColeccionistaService, private albumService: AlbumService, private formBuilder: FormBuilder,private musiciansService: MusiciansService) { }

  ngOnInit() {
    this.getCollectors();
    this.getMusicians();
    this.getAlbumes();
    this.formAlbums = this.formBuilder.group({
      album: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.formMusic = this.formBuilder.group({
      musico: ['', Validators.required]
    });

  }

  getCollectors() {
    const collectorId: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.collectorService.getCollectorAlbums(collectorId).subscribe(albumes => {
      this.collectorAlbum = albumes;
    });
    this.collectorService.getCollectorId(collectorId).subscribe(cs => {
      this.collectorDetail = cs;
      this.comments = cs.comments;
      this.artista = cs.favoritePerformers;
      console.log(this.collectorAlbum);
    })
  }

  getMusicians(){
    this.musiciansService.getAllMusicians().subscribe(musicians => {
      this.musicians = musicians;
    })
  }

  getAlbumes(){
    this.albumService.getAllAlbums().subscribe(albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  changeMusic(e) {
    console.log(e.target.value)
    this.musico.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeAlbum(e) {
    console.log(e.target.value)
    debugger;
    this.album.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get musico() {
    return this.formMusic.get('musico');
  }

  get album() {
    return this.formAlbums.get('album');
  }

  saveMusic() {
    console.log(this.collectorDetail.id);
    console.log(this.formMusic.value.musico);
    this.musiciansService.saveMusicianByCollectorId(this.collectorDetail.id , this.formMusic.value.musico).subscribe(
      data => {
        localStorage.setItem("Data2", JSON.stringify(data));
        window.location.reload();

      }, error => {
        console.error(error);
      }
    );
  }

  saveAlbumToCollector() {
    debugger;

    const request = {price: this.formAlbums.value.price, status: 'Active'}
    this.collectorService.addAlbumToCollector(
        this.collectorDetail.id,
        this.formAlbums.value.album.id,
        request
      ).subscribe(
      data => {
        window.location.reload();

      }, error => {
        console.error(error);
      }
    );
  }
}
