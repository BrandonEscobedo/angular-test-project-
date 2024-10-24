import { Component, Input } from '@angular/core';

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
