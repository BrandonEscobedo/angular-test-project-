import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

const MATERIAL_MODULES = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, RouterOutlet
];
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
   
<mat-drawer-container class="sideBarContainer" >
    <mat-drawer #drawer opened="true" mode="side" class="sideBarContainer">
    <mat-nav-list >
    <mat-list-item>
        <a mat-button routerLink="/">
          <div class="icon-text">
            <mat-icon>folder</mat-icon>
           
          </div>
          <span>Proyectos</span>
        </a>
      </mat-list-item>
  

      <mat-list-item>
        <a mat-button routerLink="/">
          <div class="icon-text">
            <mat-icon>home</mat-icon>
           
          </div>
          <span>Home</span>
        </a>
      </mat-list-item>
      <mat-list-item>
        <a mat-button routerLink="/">
          <div class="icon-text">
            <mat-icon>home</mat-icon>
           
          </div>
          <span>Home</span>
        </a>
      </mat-list-item>
    </mat-nav-list>
    </mat-drawer>
      <mat-drawer-content >
<div style="text-align:center;">
<router-outlet>

</router-outlet>   
</div>
   </mat-drawer-content>
   
</mat-drawer-container>

  `,
  styles: ``
})
export class ToolbarComponent {
  onNewContactEvent = output<void>();
  emittedClick(): void {
    this.onNewContactEvent.emit();
    console.log("nuevo contacto")
  }
}
