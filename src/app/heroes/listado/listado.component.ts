import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado?: String;
  constructor() {
    console.log('Constructor4');
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift();
  }

}
