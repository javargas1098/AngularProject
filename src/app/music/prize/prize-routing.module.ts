import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizeComponent } from './prize-list/prize-list.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';

const routes: Routes = [{
  path: 'prizes',
  children: [
    {
      path: 'list',
      component: PrizeComponent
    },
    {
      path: ':id',
      component: PrizeDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrizeRoutingModule { }
