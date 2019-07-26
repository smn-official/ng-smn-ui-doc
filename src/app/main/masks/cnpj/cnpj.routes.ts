import {Routes} from '@angular/router';

export const CNPJ: Routes = [{
    path: 'masks/cnpj',
    loadChildren: 'src/app/main/masks/cnpj/cnpj.module#CnpjModule'
}];
