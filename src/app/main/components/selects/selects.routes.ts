import {Routes} from '@angular/router';

export const SELECTS: Routes = [{
    path: 'selects',
    loadChildren: 'src/app/main/components/selects/selects.module#SelectsModule'
}];
