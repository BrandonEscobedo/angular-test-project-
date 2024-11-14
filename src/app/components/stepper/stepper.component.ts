import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface Step {
  stepname: string;
  content: string;
}
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  @Input() stepList: Step[] = []; // Recibimos los pasos como entrada
  activeStep: Step = { stepname: '', content: '' };
  porcentajeCompletado: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.stepList.length > 0) {
      this.setActiveStep(this.stepList[0]);
    }
  }

  setActiveStep(step: Step): void {
    this.activeStep = step;
    const stepIndex = this.stepList.indexOf(step);
    this.porcentajeCompletado = (stepIndex + 1) / this.stepList.length * 100;
  }
}
