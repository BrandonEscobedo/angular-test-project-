import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { KnobModule } from 'primeng/knob';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ButtonModule, CalendarModule, FormsModule, StepperModule, KnobModule, MessagesModule, EditorModule
    , ReactiveFormsModule
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent implements OnInit {
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl()
    });
  }
  text: string | undefined;
onsSubmit() {
  console.log(this.formGroup.value);
}
  value: number = 0;
  date: Date | undefined;
}
