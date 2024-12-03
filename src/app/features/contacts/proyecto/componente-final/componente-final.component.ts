import { Component, inject } from '@angular/core';
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
    padre
    <app-componente1></app-componente1>en padre
    <input 
      type="text" 
      [(ngModel)]="nombre"
      (ngModelChange)="EnviarProyecto(nombre)"
    >
  `,
  styles: ``
})
export class ComponenteFinalComponent {
  nombre: string = "";
  proyectoService = inject(ComponentService);

  EnviarProyecto(nombre: string): void {
    const proyectoEnviar = new proyecto();
    proyectoEnviar.nombre = nombre;
    this.proyectoService.seleccionarProyecto(proyectoEnviar);
  }

  constructor() {
    // Inicializar el proyecto en el servicio
    this.EnviarProyecto(this.nombre);
  }
}
