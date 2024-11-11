import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

export enum EstatusEnum {
  Activo = 'Activo',
  Pendiente = 'Pendiente',
  Desarrollo = 'Desarrollo'
}
interface Estatus {
  nombre: string;
  formGroup: FormGroup;
}

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatLabel, MatFormField, MatInput, MatDialogContent,
    CommonModule, ReactiveFormsModule, MatStepperModule, MatDatepickerModule, FormsModule,MatCheckboxModule,MatFormFieldModule
  ],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true },
  }, provideNativeDateAdapter()]
})
export class CrearComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  estatusList: Estatus[] = [];

  private readonly _fb = inject(FormBuilder);

  ngOnInit(): void {
    this._buildForm();
  }
  constructor() {

  }
  get estatusProyecto(): FormArray {
    return this.contactForm.get('estatusProyecto') as FormArray;
  }
  private _buildForm(): void {
    // Main form with FormArray for project statuses
    this.contactForm = this._fb.group({
      nombre: ['', Validators.required],
      apellido: [''],
      telefono: [''],
      estatusProyecto: this._fb.array([])
    });

    this.agregarEstatusIniciales();

  }
  onsubmit() {
    console.log(this.contactForm.value);
  }
  agregarEstatusIniciales() {
    // Loop over the EstadoNombre enum values to add them to the form
    Object.values(EstatusEnum).forEach(nombreEstado => {
      const estatusFormGroup = this._fb.group({
        nombre: new FormControl(nombreEstado),
        descripcion: new FormControl(''),
        fechaInicio: new FormControl(''),
        fechaFin: new FormControl(''),
        fechaActualizacion: new FormControl(''),
        comentarios: new FormControl(''),
        actual: new FormControl(false)
      });
      this.estatusProyecto.push(estatusFormGroup);
    });
  }
  alMenosUnEstadoCompleto(formArray: FormArray): { [key: string]: boolean } | null {
    const hasAtLeastOneCompleted = formArray.controls.some(control => {
      const descripcion = control.get('descripcion')?.value;
      const fechaInicio = control.get('fechaInicio')?.value;
      const fechaFin = control.get('fechaFin')?.value;
      // Add more fields if needed
      return !!(descripcion || fechaInicio || fechaFin);
    });

    return hasAtLeastOneCompleted ? null : { alMenosUnoRequerido: true };
  }
  setEstatusActual(index: number) {
    // Mark one as "actual" and the others as false
    this.estatusProyecto.controls.forEach((estatus, i) => {
      estatus.patchValue({ actual: i === index });
    });
  }
}
