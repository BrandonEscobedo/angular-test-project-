import { Routes } from '@angular/router';
import { CrearComponent } from '@components/crear/crear.component';
 
export const routes: Routes = [
    {
        path:'', redirectTo:'/contacts', pathMatch:'full',   
    },
    {
        path:'contacts',loadChildren:()=>import('./features/contacts/contacts.routes'),
    },
    {
        path:'crear',component:CrearComponent
    },
    {
        path:'proyectos',loadComponent:()=>import('./components/proyectos/proyectos.component').then(X=>X.ProyectosComponent)
    }
];
