import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { proyecto } from 'src/app/data/proyectos.model';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [FormsModule],
  template: `
   <div class="Content">
    componente 3
    <div>
      <p>Proyecto: {{proyectoNuevo?.nombre}}</p>
      <input 
      type="text" 
      [(ngModel)]="nombre"
      (ngModelChange)="EnviarProyecto(nombre)"
    >
    </div>
   </div>
  `,
})
export class Componente3Component {
  nombre: string = "";
  proyectoNuevo: proyecto | null = null;
  proyectoService = inject(ComponentService);
  constructor() {
    effect(() => {
      this.proyectoNuevo = this.proyectoService.proyecto();
    })
  }
  EnviarProyecto(nombre: string): void {
    var proyectoEnviar = new proyecto();
    proyectoEnviar.nombre = nombre;
    this.proyectoService.seleccionarProyecto(proyectoEnviar);
  }
}
