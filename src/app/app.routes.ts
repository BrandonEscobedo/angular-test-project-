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
    },
    {
        path:'verProyecto',loadComponent:()=>import('./components/vista-proyecto/vista-proyecto.component').then(X=>X.VistaProyectoComponent)
    },{
        path:'proyects',loadComponent:()=>import('../app/features/contacts/proyecto/componente-final/componente-final.component').then(X=>X.ComponenteFinalComponent)
    }
];
