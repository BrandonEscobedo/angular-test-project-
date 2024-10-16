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
        path:'**',redirectTo:'/contacts'
    },
    {
        path:'crear',component:CrearComponent
    }
];
