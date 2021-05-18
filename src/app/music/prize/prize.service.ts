import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Prize } from './prize';
import { SavePrice } from '../models/SavePrice';
import { PerformerPrize } from '../models/PerformerPrize';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  url(): string {
    return environment.baseUrl;
  }

  constructor(private http: HttpClient) { }

  getAllPrize(): Observable<Prize[]> {
    return this.http.get<Prize[]>(this.url() + 'prizes');
  }

  getPrizeById(id: number): Observable<Prize> {
    return this.http.get<Prize>(this.url() + 'prizes/' + id);
  }

  getPrizeById2(id: number): Observable<PerformerPrize[]> {
    return this.http.get<PerformerPrize[]>(this.url() + 'prizes/' + id + '/performers');
  }

  savePrizeByMusicianyId(prizeId: number, musicianId: number, savePrice: SavePrice): Observable<Prize> {
    return this.http.post<Prize>(this.url() + 'prizes/' + prizeId + '/musicians/' + musicianId, savePrice);
  }

}
