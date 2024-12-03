import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Componente1Component } from "../componente1/componente1.component";
import { ProyectosService } from '@components/servicios/proyectos.service';
import { proyecto } from 'src/app/data/proyectos.model';
import { ComponentService } from 'src/app/services/component.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-final',
  standalone: true,
  imports: [Componente1Component, CommonModule, FormsModule],
  template: `
        <p>Proyecto: {{proyecto?.nombre}}</p>

    <app-componente1></app-componente1>en padre
    <input 
      type="text" 
      [(ngModel)]="proyecto.nombre"
      placeholder="en final"
    >
  `,
  styles: ``,
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ComponenteFinalComponent {
  proyectoService = inject(ComponentService);
  proyecto: proyecto=new proyecto();

  constructor() {
    effect(() => {
      this.proyecto = this.proyectoService.proyectonuevo();
    });
  }
}
