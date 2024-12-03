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
      <p>Proyecto: {{proyecto?.nombre}}</p>
      <input 
      type="text" 
      [(ngModel)]="proyecto.nombre"
     
    >
    </div>
   </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Componente3Component {
  proyectoService = inject(ComponentService);
  proyecto: proyecto=new proyecto();

  constructor() {
    effect(() => {
      this.proyecto = this.proyectoService.proyectonuevo();
    });
  }
}
