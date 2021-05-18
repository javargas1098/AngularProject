import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Coleccionista } from './coleccionista';
import { Album } from '../album/album';

@Injectable({
  providedIn: 'root'
})
export class ColeccionistaService {

  url(): string {
    return environment.baseUrl;
  }

  constructor(private http: HttpClient) { }

  getAllCollectors(): Observable<Coleccionista[]> {
    return this.http.get<Coleccionista[]>(this.url() + 'collectors');
  }

  getCollectorId(id: number): Observable<Coleccionista> {
    return this.http.get<Coleccionista>(this.url() + 'collectors/' + id);
  }

  addAlbumToCollector(collectorid: number,albumId: number, albumRequest: any): Observable<Coleccionista> {
    return this.http.post<Coleccionista>(`${this.url()}collectors/${collectorid}/albums/${albumId}`, albumRequest);
  }

  getCollectorAlbums(collectorId: number): Observable<any> {
    return this.http.get<Coleccionista>(`${this.url()}collectors/${collectorId}/albums`);
  }

}
