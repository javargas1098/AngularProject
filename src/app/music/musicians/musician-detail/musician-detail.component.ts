import { Component, OnInit, ViewChild } from '@angular/core';
import { Musician } from '../musician';
import { MusiciansService } from '../musicians.service';
import { ActivatedRoute } from "@angular/router";
import { PrizeService } from '../../prize/prize.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prize } from '../../prize/prize';
import { DatePipe } from '@angular/common'
import { SavePrice } from '../../models/SavePrice';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css']
})
export class MusicianDetailComponent implements OnInit {
  musician: Musician;
  formPrize: FormGroup;
  prizes: Prize[];
  prizeC: Prize;
  model;

  constructor(
    private musiciansService: MusiciansService,
    private prizeService: PrizeService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe
  ) { }

  getPrizesList() {
    const musicianId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.prizeService.getAllPrize().subscribe(cs => {
      this.prizes = cs;
      this.prizes.forEach((pr, index) => {
        this.prizeService.getPrizeById2(pr.id).subscribe(pri => {
          pri.forEach(pr => {
            if (pr.performer.id === musicianId) {
              this.musician.performerPrizes[index] = Object.assign({}, this.musician.performerPrizes[index], pri[index].prize);
            }
          })
        });
      })
      console.log(this.prizes);
    });
  }

  getMusicians() {
    const musicianId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.musiciansService.getMusicianById(musicianId).subscribe(musician => {
      this.musician = musician;
      console.log(this.musician.performerPrizes)

      console.log(this.musician);
    });
  }




  ngOnInit(): void {
    this.getMusicians();
    this.getPrizesList();
    this.formPrize = this.formBuilder.group({
      prize: ['', Validators.required],
      date: ['', Validators.required]
    });
  }



  changePrize(e) {
    console.log(e.target)
    this.prize.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get prize() {
    return this.formPrize.get('prize');
  }
  get date() {
    return this.formPrize.get('date');
  }

  savePrize() {
    const date = new Date(this.formPrize.value.date.year, this.formPrize.value.date.month - 1, this.formPrize.value.date.day);
    let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
    let savePrice: SavePrice = new SavePrice();
    savePrice.premiationDate = latest_date;
    this.prizeC = this.formPrize.value.prize.value
    console.log(this.formPrize.value.prize);
    console.log(this.musician.id);
    console.log(savePrice);
    this.prizeService.savePrizeByMusicianyId( this.formPrize.value.prize,this.musician.id, savePrice).subscribe(
      data => {
        localStorage.setItem("Data3", JSON.stringify(data));
        window.location.reload();

      }, error => {
        console.error(error);
      }
    );
  }
}
