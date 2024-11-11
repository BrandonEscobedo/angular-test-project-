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
      estatusProyecto: this._fb.array([], [this.alMenosUnEstadoCompleto(), this.alMenosUnEstadoActivoYCompleto()])
    });

    this.agregarEstatusIniciales();

  }
  onsubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }else{
      //alarta primeng
    }
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
  alMenosUnEstadoCompleto(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormArray) {
        const hasAtLeastOneCompleted = control.controls.some(estatusControl => {
          const Comentarios = estatusControl.get('Comentarios')?.value;
          const fechaActualizacion = estatusControl.get('fechaActualizacion')?.value;
          return !!(Comentarios && fechaActualizacion);
        });
        return hasAtLeastOneCompleted ? null : { alMenosUnoRequerido: true };
      }
      return null;
    };
  }
  alMenosUnEstadoActivoYCompleto(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormArray) {
        const hasValidActiveStatus = control.controls.some(estatusControl => {
          const isActive = estatusControl.get('actual')?.value;
          const Comentarios = estatusControl.get('Comentarios')?.value;
          const fechaActualizacion = estatusControl.get('fechaActualizacion')?.value;

          if (isActive) {
            return Comentarios && fechaActualizacion ;
          }
          return false;
        });

        return hasValidActiveStatus ? null : { activoCompletoRequerido: true };
      }
      return null;
    };
  }
  setEstatusActual(index: number) {
    this.estatusProyecto.controls.forEach((estatus, i) => {
      estatus.patchValue({ actual: i === index });
    });
  }
}
