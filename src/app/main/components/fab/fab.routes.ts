import {Routes} from '@angular/router';

export const FAB: Routes = [{
    path: 'fab',
    loadChildren: 'src/app/main/components/fab/fab.module#FabModule'
}];
