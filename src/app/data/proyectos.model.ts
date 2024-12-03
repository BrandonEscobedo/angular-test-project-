export class proyecto {
    nombre: string;
    EstadosProyecto: EstadoProyecto[];
    constructor() {
        this.nombre = "";
        this.EstadosProyecto = [];
    }
}
export class proyectoActual {
    nombre: string;
    estadoActual = new EstadoProyecto();
    EstadosProyecto: EstadoProyecto[] = [];
    constructor() {
        this.nombre = "";
        this.EstadosProyecto = [];
    }
}
export class EstadoProyecto {
    nombreProyecto = "";
    esActual = false
}