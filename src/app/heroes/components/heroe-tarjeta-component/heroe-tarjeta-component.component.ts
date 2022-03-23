import { Component, Input } from '@angular/core';
import { Heroe } from '../../../heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [`
   mat-card{
      margin-top:25px
    }
  `
  ]
})
export class HeroeTarjetaComponentComponent {

  @Input()heroe!: Heroe



}
