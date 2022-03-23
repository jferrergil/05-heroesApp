import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AgregaroComponent } from './pages/agregaro/agregaro.component';
import { BuscaroComponent } from './pages/buscaro/buscaro.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponentComponent } from './components/heroe-tarjeta-component/heroe-tarjeta-component.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregaroComponent,
    BuscaroComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponentComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
