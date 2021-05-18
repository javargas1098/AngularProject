import { Component, OnInit } from '@angular/core';
import { ColeccionistaService } from '../coleccionista.service';
import { Coleccionista } from '../coleccionista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coleccionista',
  templateUrl: './coleccionista-list.component.html',
  styleUrls: ['./coleccionista-list.component.css']
})
export class ColeccionistaComponent implements OnInit {

  constructor(private collectorService: ColeccionistaService, private router: Router) { }
  collectors: Coleccionista[];
  selected = false;
  selectedCollector: Coleccionista;
  getCollectorsList() {
    this.collectorService.getAllCollectors().subscribe(cs => {
      this.collectors = cs;
      console.log(this.collectors);
    });
  }
  onSelected(co: Coleccionista): void {
    this.selected = true;
    this.selectedCollector = co;
  }
  ngOnInit() {
    this.getCollectorsList();
  }

}
