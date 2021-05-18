
import { Component, OnInit } from '@angular/core';
import { Prize } from '../prize';
import { PrizeService } from '../prize.service';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from '../../musicians/musicians.service';
import { Performer } from '../../models/performer';
@Component({
  selector: 'app-prize-detail',
  templateUrl: './prize-detail.component.html',
  styleUrls: ['./prize-detail.component.css']
})
export class PrizeDetailComponent implements OnInit {

  performerList: Performer[] = [];
  prize: Prize;
  date = new Date();
  constructor(
    private prizeService: PrizeService,
    private musiciansService: MusiciansService,
    private readonly route: ActivatedRoute
  ) { }

  getPrize() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.prizeService.getPrizeById(id).subscribe(prize => {
      this.prize =  prize;
    });

  }
  getPerformer() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.prizeService.getPrizeById2(id).subscribe(pr => {
      if(Array.isArray(pr)) {
        pr.forEach((performer) => {
          console.log(performer);
          this.performerList.push(Object.assign({}, this.performerList, performer.performer));
        });
      } else {
        this.performerList.push(Object.assign({}, this.performerList, pr));
      }
    })
  }

  ngOnInit() {
    this.getPerformer();
    this.getPrize();
  }
}
