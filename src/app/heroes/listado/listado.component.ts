import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'batman', 'hulk', 'thor'];

  heroeBorrado:string='';

  borrarHeroe(): void {
      this.heroeBorrado = this.heroes.shift() || '';
  }



}
