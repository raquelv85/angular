import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
<h3>La base es: <strong>{{ base }}</strong></h3>

<button (click) = "action( base )">+ {{ base }}</button>
<span>{{ number }}</span>
<button (click) = "action( -base )">- {{ base }}</button>
    
    `

})

export class ContadorComponent {
    title: string = 'Contador App';
    number: number = 10;
    base: number = 5;
  
    action( value: number) {
      this.number += value;
    }
  
}