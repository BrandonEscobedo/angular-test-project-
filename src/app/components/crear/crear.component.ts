import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatLabel,MatFormField,MatInput, MatDialogContent, RouterOutlet, RouterLink,RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent  implements OnInit{
ngOnInit(): void {
  this._buildForm();
}
contactForm!:FormGroup;
private readonly _fb=inject(FormBuilder);
//inyectar servicio
async onsubmit(){
let message='Contact edited successfully';
const contact= this.contactForm.value;
//Llamar al servicio
//enviar con this.contactForm.value o contact para post 
console.log(contact);
}
private _buildForm():void{
  this.contactForm=this._fb.nonNullable.group({
    nombre:['', Validators.required],
    apellido:[''],
    telefono:[''],

  });
}
}
