
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColeccionistaRoutingModule } from './coleccionista-routing.module';
import { ColeccionistaComponent } from './coleccionista-list/coleccionista-list.component';
import { ColeccionistaDetailComponent } from './coleccionista-detail/coleccionista-detail.component';
import { ColeccionistaService } from './coleccionista.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ColeccionistaComponent, ColeccionistaDetailComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ColeccionistaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ColeccionistaService]
})
export class ColeccionistaModule { }

