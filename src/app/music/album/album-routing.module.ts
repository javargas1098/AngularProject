import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';

const routes: Routes = [{
  path: 'albums',
  children: [
    {
      path: 'list',
      component: AlbumComponent
    },
    {
      path: 'create',
      component: AlbumCreateComponent
    },
    {
      path: ':id',
      component: AlbumDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
