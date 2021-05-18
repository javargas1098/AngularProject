import { NgModule } from '@angular/core';
import { CommonModule , DatePipe } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicianModule } from './musicians/musician.module';
import { AlbumModule } from './album/album.module';
import { PrizeModule } from './prize/prize.module';
import { ColeccionistaModule } from './coleccionista/coleccionista.module';
import { HttpClientModule } from '@angular/common/http';
import { MusicRoutingRoutes } from './music-routing.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MusicianModule,
    AlbumModule,
    PrizeModule,
    ColeccionistaModule,
    HttpClientModule,
    MusicRoutingRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MusicComponent],
  providers: [DatePipe]

})
export class MusicModule { }
