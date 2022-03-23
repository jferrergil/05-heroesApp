import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaroComponent } from './pages/agregaro/agregaro.component';
import { BuscaroComponent } from './pages/buscaro/buscaro.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'agregar',
        component: AgregaroComponent,
      },
      {
        path: 'editar/:id',
        component: AgregaroComponent,
      },
      {
        path: 'buscar',
        component: BuscaroComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
