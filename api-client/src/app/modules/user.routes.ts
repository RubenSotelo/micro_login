import { Routes } from '@angular/router';
/// Importamos los compones a utilizar
import { AuthComponent } from '../components/user/auth/auth.component';

export const ROUTES_USER: Routes = [

    {path: '', component: AuthComponent},
];

