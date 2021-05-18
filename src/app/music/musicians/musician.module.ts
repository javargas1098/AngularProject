import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicianRoutingModule } from './musician-routing.module';
import { MusiciansComponent } from './musician-list/musicians-list.component';
import { MusicianDetailComponent } from './musician-detail/musician-detail.component';
import { MusiciansService } from './musicians.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MusiciansComponent, MusicianDetailComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MusicianRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [MusiciansService]
})
export class MusicianModule { }

