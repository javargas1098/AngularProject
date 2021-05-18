import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Album } from './album';
import { SaveAlbumComment } from '../models/saveAlbumComment';
import {TrackAlbum}from '../models/trackAlbum';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  url(): string {
    return environment.baseUrl;
  }

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url() + 'albums');
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.url() + 'albums/' + id);
  }

  saveCommentByAlbumById(id: number, saveComment: SaveAlbumComment): Observable<Album> {
    return this.http.post<Album>(this.url() + 'albums/' + id + '/comments', saveComment);
  }
  saveAlbum(album:Album): Observable<Album> {
    return this.http.post<Album>(this.url() + 'albums/',album);
  }
  saveTrackByAlbumById(id: number, trackAlbum: TrackAlbum): Observable<any> {
    return this.http.post<any>(this.url() + 'albums/' + id + '/tracks', trackAlbum);
  }
}
