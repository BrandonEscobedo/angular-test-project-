import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from "./features/contacts/list/list.component";
import { CrearComponent } from '@components/crear/crear.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const MATERIAL_MODULES = [
  MatCardModule
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'contact';
  OnNewContact():void{

  }
}
