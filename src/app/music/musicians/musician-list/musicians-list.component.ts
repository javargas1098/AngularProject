import { Component, OnInit } from '@angular/core';
import { MusiciansService } from '../musicians.service'
import { Musician } from '../musician'

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians-list.component.html',
  styleUrls: ['./musicians-list.component.css']
})
export class MusiciansComponent implements OnInit {

  constructor(private musiciansService: MusiciansService) { }
  musicians: Musician[];

  getMusicians(){
    this.musiciansService.getAllMusicians().subscribe(musicians => {
      this.musicians = musicians;
    })
  }

  ngOnInit(): void {
    this.getMusicians();
  }

}
