import {Routes} from '@angular/router';

export const INFINITE_LOAD: Routes = [{
    path: 'infinite-load',
    loadChildren: 'src/app/main/components/infinite-load/infinite-load.module#InfiniteLoadModule'
}];
