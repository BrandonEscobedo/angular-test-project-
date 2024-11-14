import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';

import { MatFormFieldModule } from '@angular/material/form-field';
import { StepperComponent } from "../stepper/stepper.component";
export enum EstatusEnum {
  Activo = 'Activo',
  Pendiente = 'Pendiente',
  Desarrollo = 'Desarrollo',
  Analisis = 'Analisis',
  Cancelado = 'Cancelado',
  noAprobado = 'noAprobado',
  Cerrado = 'Cerrado',
  Implementacion = 'Implementacion',

}
interface Estatus {
  nombre: string;
  formGroup: FormGroup;
}

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatLabel, MatFormField, MatInput, MatDialogContent,
    CommonModule, ReactiveFormsModule, MatStepperModule, MatDatepickerModule, FormsModule, MatCheckboxModule, MatFormFieldModule, StepperModule, StepsModule, StepperComponent],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true },
  }, provideNativeDateAdapter()]
})
export class CrearComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  selectedStepIndex: number = 0; // índice del paso actual
  private readonly _fb = inject(FormBuilder);
  stepList: any[] = [{
    stepname: 'Paso 1',
    isComplete: false
  }, {
    stepname: 'Paso 2',
    isComplete: false
  },
  {
    stepname: 'Paso 3',
    isComplete: false
  },
  {
    stepname: 'Paso 4',
    isComplete: false
  },
  {
    stepname: 'Paso 5',
    isComplete: false
  }
  ]
  porcentajeCompletado: number = 8;
  activeStep: any = this.stepList[0];
  setActiveStep(step: any) {
    this.activeStep = step;
    this.porcentajeCompletado = 30;
  }
  ngOnInit(): void {
    this._buildForm();
  }

  goStep() {

  }
  get estatusProyecto(): FormArray {
    return this.contactForm.get('estatusProyecto') as FormArray;
  }
  activeIndex: number = -1;  // Ningún paso visible al inicio
  private _buildForm(): void {
    this.contactForm = this._fb.group({
      nombre: ['', Validators.required],
      apellido: [''],
      telefono: [''],
      estatusProyecto: this._fb.array([])
    });
    this.agregarEstatusIniciales();
  }

  onStepChange(event: any): void {
    this.selectedStepIndex = event.selectedIndex;
  }

  agregarEstatusIniciales() {
    Object.values(EstatusEnum).forEach(nombreEstado => {
      const estatusFormGroup = this._fb.group({
        nombre: new FormControl(nombreEstado),
        fechaActualizacion: new FormControl(''),
        Comentarios: new FormControl(''),
        actual: new FormControl(false)
      });
      this.estatusProyecto.push(estatusFormGroup);
    });
  }

  onsubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  setEstatusActual(index: number) {
    this.estatusProyecto.controls.forEach((estatus, i) => {
      estatus.patchValue({ actual: i === index });
    });
  }
}
