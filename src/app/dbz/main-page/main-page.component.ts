import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
    

  agregarNuevoPersonaje( evento: Personaje ){
   // this.personajes.push( evento )
  }

  constructor() { }
  
}
