import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumService } from './album.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumCreateComponent } from './album-create/album-create.component';
@NgModule({
  declarations: [AlbumDetailComponent, AlbumComponent, AlbumCreateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AlbumRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [AlbumService]
})
export class AlbumModule { }

