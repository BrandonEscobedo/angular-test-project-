import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { MatIcon } from '@angular/material/icon';
import { NgModel } from '@angular/forms';
const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, rol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, rol: 'He' },

]
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent, MatIcon],
  template: `
<section>
@if(data){
  <app-grid [displayedColumns]="displayedColumns" [data]="data" [sortableColumns]="sortables" 
  [headerMapping]="sort" [customCellTemplates]="customTemplates"/>
}
</section>
<ng-template #rolTemplate let-value let-element="element">
<p>papu</p>
</ng-template>
  `,
  styles: ``
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.customTemplates = {
      'rol': this.rolTemplate
    };
  }
  data = ELEMENT_DATA;
  @ViewChild('rolTemplate', { static: true }) rolTemplate!: TemplateRef<NgModel>;
  customTemplates!: { [key: string]: TemplateRef<any> };

  displayedColumns: any[] = ['position', 'name', 'weight', 'rol', 'action'];
  sortables: any = ['position', 'name', 'weight', 'rol'];
  sort = { 'position': 'as  asd', 'name': 'Correo electrónico' };
} 
