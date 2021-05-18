import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AlbumService } from '../album.service';
import { Album } from '../album';
@Component({
  selector: "app-album-create",
  templateUrl: "./album-create.component.html",
  styleUrls: ["./album-create.component.css"]
})
export class AlbumCreateComponent implements OnInit {
  albumForm: FormGroup;

  albumes: Album[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private albumService: AlbumService,
  ) {

  }

  createalbum(newalbum: Album) {
    console.log(newalbum);
    // Process checkout data here

    this.albumService.saveAlbum(newalbum).subscribe(album => {
         //this.albumes.push(album);
         console.warn("el album fue creado", album);
       
         
        this.showSuccess(album);
       });

    //-----------------------------------------------------------------
    // this.albumService.createalbum(newalbum).subscribe(album => {
    //   this.albumes.push(album);
    //  this.showSuccess(newalbum);
    // });
    //------------------------------------------------------------------
    this.albumForm.reset();

  }

  showSuccess(album: Album) {
    this.toastr.success('Creado exitosamente!', `albume ${album.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.albumForm.reset();
  }

  ngOnInit() {
    this.albumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(500)]],
      cover: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(500)]],
      genre: ["", Validators.required],
      description: ["",  [Validators.required, Validators.minLength(4)]],
      recordLabel: ["",  Validators.required],
      releaseDate: ["",  Validators.required]
    });

    // Validators.pattern('/^\d{2}[./\/]\d{2}[./\/]\d{4}$/')
  }
}
