import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscaro',
  templateUrl: './buscaro.component.html',
  styles: [
  ]
})
export class BuscaroComponent implements OnInit {

  termino:string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado:Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes)
  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeId(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe)

  }

}
