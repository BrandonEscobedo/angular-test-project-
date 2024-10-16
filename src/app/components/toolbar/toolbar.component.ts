import { Component, computed, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListComponent } from "../../features/contacts/list/list.component";
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, RouterOutlet, RouterLink,RouterLinkActive, CommonModule
];
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES, ListComponent],
  template: `
   <mat-toolbar >
<button mat-icon-button (click)="colapsed.set(!colapsed())"><mat-icon>menu</mat-icon></button>
   </mat-toolbar>
   <mat-sidenav-container class="sidenav-container">
    <mat-sidenav opened mode="side" [style.width]="sideNavWidth()">
<mat-nav-list>
<a href="" mat-list-item routerLink="/contacts" >
    <mat-icon matListItemIcon>home</mat-icon>
    <span matListItemTitle>
      Lista 
    </span>
  </a>
  <a mat-list-item routerLink="crear" routerLinkActive="active" ariaCurrentWhenActive="page">
    <mat-icon routerLink="crear" routerLinkActive="active" ariaCurrentWhenActive="page" matListItemIcon>home</mat-icon>
    <span routerLink="crear" routerLinkActive="active" ariaCurrentWhenActive="page" matListItemTitle>
      Usuarios 
    </span>
  </a>
  <a href="" mat-list-item>
    <mat-icon matListItemIcon>home</mat-icon>
    <span matListItemTitle>
      Roles
    </span>
  </a>
  <a href="" mat-list-item>
    <mat-icon matListItemIcon>home</mat-icon>
    <span matListItemTitle>
      Contacts 
    </span>
  </a>
</mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content [style.margin-left]="sideNavWidth()" class="content">
    <section>
    <router-outlet></router-outlet>
    </section>
    </mat-sidenav-content>
  </mat-sidenav-container>


  `,
  styles: `
  mat-sidenav-container {
    height: cal(100vh-64px);
  }
  .content{
    padding:10px;
  }`
})
export class ToolbarComponent {
colapsed=signal(false);
sideNavWidth=computed(()=>this.colapsed()? '65px' :'200px');
  onNewContactEvent = output<void>();
  emittedClick(): void {
    this.onNewContactEvent.emit();
    console.log("nuevo contacto")
  }
}
