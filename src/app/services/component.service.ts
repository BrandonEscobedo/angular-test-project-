import { computed, Injectable, signal } from '@angular/core';
import { EstadoProyecto, proyecto, proyectoActual } from '../data/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  proyectonuevo = signal<proyecto>(new proyecto());
    getProyecto() {
    return this.proyectonuevo();
  }
  actualizarProyecto(parcial: Partial<proyecto>) {
    const actual = this.proyectonuevo();
    this.proyectonuevo.set({ ...actual, ...parcial });
  }
}
