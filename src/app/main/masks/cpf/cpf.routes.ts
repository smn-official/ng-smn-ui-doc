import {Routes} from '@angular/router';

export const CPF: Routes = [{
    path: 'masks/cpf',
    loadChildren: 'src/app/main/masks/cpf/cpf.module#CpfModule'
}];
