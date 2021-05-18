import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musician } from './musician'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusiciansService {

  url(): string {
    return environment.baseUrl;
  }

  constructor(private http: HttpClient) { }

  getAllMusicians(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.url() + 'musicians');
  }

  getMusicianById(id: number): Observable<Musician> {
    return this.http.get<Musician>(this.url() + 'musicians/' + id);
  }

  saveMusicianByCollectorId(idCollector: number, idMusician: number): Observable<Musician> {
    return this.http.post<Musician>(this.url() + 'collectors/' + idCollector + '/musicians/' + idMusician, null);
  }
}
