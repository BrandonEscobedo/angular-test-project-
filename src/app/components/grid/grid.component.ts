import { AfterViewInit, Component, effect, input, OnInit, signal, viewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FilterComponent } from "./filter/filter.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatPaginatorModule, FilterComponent,MatIconModule,MatButtonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent<T> implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  constructor() {
    effect(()=>{
      if(this.valueToFilter()){
        this.dataSource.filter=this.valueToFilter();
      }
      else{
        this.dataSource.filter='';
      }
    },{allowSignalWrites:true});
   }

  displayedColumns=input.required<string[]>();
  data=input.required<T[]>();
  sortableColumns=input<string[]>([]);
  private readonly _sort=viewChild.required<MatSort>(MatSort);
  private readonly _paginator=viewChild.required<MatPaginator>(MatPaginator);
  dataSource=new MatTableDataSource<T>();
  valueToFilter=signal('');
  ngOnInit(): void {
  this.dataSource.data=this.data();
  this.dataSource.sort=this._sort();
  this.dataSource.paginator=this._paginator();
  }
  applyFilter(event: Event): void {
    const filterValue= (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
