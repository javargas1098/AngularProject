import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeRoutingModule } from './prize-routing.module';
import { PrizeComponent } from './prize-list/prize-list.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';
import { PrizeService } from './prize.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PrizeDetailComponent, PrizeComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    PrizeRoutingModule
  ],
  providers: [PrizeService]
})
export class PrizeModule { }

