
import { NgModule } from '@angular/core';
import { ColeccionistaRoutingModule } from './coleccionista/coleccionista-routing.module'
import { MusicianRoutingModule } from './musicians/musician-routing.module';
import { AlbumRoutingModule } from './album/album-routing.module';
import { PrizeRoutingModule } from './prize/prize-routing.module';
@NgModule({
  imports: [ColeccionistaRoutingModule,MusicianRoutingModule,AlbumRoutingModule,PrizeRoutingModule],
})
export class MusicRoutingRoutes { }
/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColeccionistaRoutingModule } from './coleccionista/coleccionista-routing.module'
import { MusicianRoutingModule } from './musicians/musician-routing.module';
import { AlbumRoutingModule } from './album/album-routing.module';
import { AlbumComponent } from './album/album-list/album-list.component';

const routes: Routes = [
  { path: '', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ColeccionistaRoutingModule,MusicianRoutingModule,AlbumRoutingModule],
  exports: [RouterModule]
})

export class MusicRoutingRoutes { }

////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'albums',
        loadChildren: () =>
          import('../album/album.module').then((m) => m.AlbumModule)
      },
      {
        path: 'collectors',
        loadChildren: () =>
          import('../collectors/collectors.module').then(
            (m) => m.CollectorsModule
          )
      },
      {
        path: 'artists',
        loadChildren: () =>
          import('../artist/artist.module').then((m) => m.ArtistModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}

 */
