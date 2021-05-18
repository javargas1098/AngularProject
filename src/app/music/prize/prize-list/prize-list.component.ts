import { Component, OnInit } from '@angular/core';
import { PrizeService } from '../prize.service';
import { Prize } from '../prize';
import { Comentario } from '../../models/comentario';
import { Track } from '../../models/track';
import { Performer } from '../../models/performer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prize',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css']
})
export class PrizeComponent implements OnInit {
  constructor(private prizeService: PrizeService,private router: Router) { }
  prizes: Prize[];
  getPrizesList() {
    this.prizeService.getAllPrize().subscribe(cs => {
      this.prizes = cs;
    });
  }


  ngOnInit() {
    this.getPrizesList();
  }

}
