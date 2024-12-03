import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Componente2Component } from "../componente2/componente2.component";
import { Componente3Component } from "../componente3/componente3.component";
import { ComponentService } from 'src/app/services/component.service';
import { proyecto } from 'src/app/data/proyectos.model';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [Componente2Component, Componente3Component],
  template: `
   <div class="Content">
    componente 1
    <div>
      <p>Proyecto: {{proyectoNuevo?.nombre}}</p>
    </div>
   </div>
   <div class="c2">
    <app-componente2></app-componente2>
   </div>
   <div class="c3">
    <app-componente3></app-componente3>
   </div>
  `,
  styles: `
   .Content{
    display:flex;
    background-color: #777;
      color:white;
      
    }
    .c2{
      display:flex;
    background-color: red;
      color:white;
    }
    .c3{
      display:flex;
    background-color: blue;
      color:white;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Componente1Component {
  proyectoNuevo!: proyecto;
  proyectoService = inject(ComponentService);
  constructor() {
    effect(() => {
      this.proyectoNuevo = this.proyectoService.proyectonuevo();
    });

  }
}
