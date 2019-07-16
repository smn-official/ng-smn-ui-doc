import {Routes} from '@angular/router';

export const DIVIDERS: Routes = [{
    path: 'dividers',
    loadChildren: 'src/app/main/components/dividers/dividers.module#DividersModule'
}];
