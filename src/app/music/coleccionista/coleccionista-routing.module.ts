import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColeccionistaComponent } from './coleccionista-list/coleccionista-list.component';
import { ColeccionistaDetailComponent } from './coleccionista-detail/coleccionista-detail.component';

const routes: Routes = [{
  path: 'collectors',
  children: [
    {
      path: 'list',
      component: ColeccionistaComponent
    },
    {
      path: ':id',
      component: ColeccionistaDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColeccionistaRoutingModule { }
