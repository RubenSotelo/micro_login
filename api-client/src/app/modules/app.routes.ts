import { Routes } from '@angular/router';


export const routes: Routes = [
    {   path: '',
        loadChildren: () => import('./user.routes').then(m => m.ROUTES_USER)
    },
    {
        path: 'pv',
        loadChildren: () => import('./pv.routes').then(m => m.ROUTES_PV)
    }
];
