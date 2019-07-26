import {Routes} from '@angular/router';

export const CEP: Routes = [{
    path: 'masks/cep',
    loadChildren: 'src/app/main/masks/cep/cep.module#CepModule'
}];
