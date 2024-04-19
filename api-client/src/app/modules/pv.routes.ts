import { Routes } from '@angular/router';
/// Importamos los compones a utilizar
import { TransaccionComponent } from '../components/pv/transaccion/transaccion.component';
import { ProductoComponent } from '../components/pv/producto/producto.component';

export const ROUTES_PV: Routes = [

    {path: 'transaccion', component: TransaccionComponent},
    {path: 'producto', component: ProductoComponent}
];

