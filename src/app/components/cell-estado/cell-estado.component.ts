import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cell-estado',
  standalone: true,
  imports: [],
  template: `
<p>papu</p>

  `,
  styles: ``
})
export class CellEstadoComponent {
  @Input() value: any; 
  @Input() element: any; 
}
