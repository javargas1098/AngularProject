

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusiciansComponent } from './musician-list/musicians-list.component';
import { MusicianDetailComponent } from './musician-detail/musician-detail.component';
const routes: Routes = [{
  path: 'musicians',
  children: [

    {
      path: 'list',
      component: MusiciansComponent
    },
    {
      path: ':id',
      component: MusicianDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianRoutingModule { }

