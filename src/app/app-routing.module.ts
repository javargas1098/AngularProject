import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { AlbumComponent } from './music/album/album-list/album-list.component';

const routes: Routes = [
  { path: '', component: AlbumComponent }
];

//import { MusicModule } from './music/music.module'
//import { ColeccionistaDetailComponent } from './music/coleccionista/coleccionista-detail/coleccionista-detail.component'
//import { ColeccionistaComponent } from './music/coleccionista/coleccionista-list/coleccionista.component'
/*const routes: Routes = [
  // { path: '', component: AppComponent },

  // { path: 'collector', component: ColeccionistaComponent },
  {
    path: '', component: AppComponent, children: [
      {
        path: '', loadChildren: () => import('./music/music.module').then(m => m.MusicModule)
      },
    ]
 }
/ ****** Test

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


];*/

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
