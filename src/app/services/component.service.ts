import { computed, Injectable, signal } from '@angular/core';
import { EstadoProyecto, proyecto, proyectoActual } from '../data/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private proyectoSignal = signal<proyecto | null>(null);

  // Computed para derivar el estado actual del proyecto
  readonly estadoActual = computed(() => {
    const proyecto = this.proyectoSignal();
    return proyecto?.EstadosProyecto.find(e => e.esActual) || null;
  });
  readonly proyecto = computed(() => this.proyectoSignal());
  seleccionarProyecto(proyecto: proyecto): void {
    this.proyectoSignal.set(proyecto);
  }
  actualizarProyecto(parcial: Partial<proyecto>): void {
    const proyecto = this.proyectoSignal();
    if (proyecto) {
      this.proyectoSignal.set({ ...proyecto, ...parcial });
    }
  }

  agregarEstado(nuevoEstado: EstadoProyecto): void {
    const proyecto = this.proyectoSignal();
    if (proyecto) {
      this.proyectoSignal.set({
        ...proyecto,
        EstadosProyecto: [...proyecto.EstadosProyecto, nuevoEstado]
      });
    }
  }

  cambiarEstadoActual(index: number): void {
    const proyecto = this.proyectoSignal();
    if (proyecto) {
      const nuevosEstados = proyecto.EstadosProyecto.map((estado, idx) => ({
        ...estado,
        esActual: idx === index // Solo el estado en este índice será marcado como actual
      }));
      this.proyectoSignal.set({
        ...proyecto,
        EstadosProyecto: nuevosEstados
      });
    }
  }
  constructor() { }
}
